import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Pais } from '../../models/pais.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  paises: Pais[] = [];
  paisesFiltrados: Pais[] = [];
  cargando: boolean = true;
  error: string = '';

  // Filtros
  terminoBusqueda: string = '';
  regionSeleccionada: string = '';
  regiones: string[] = [];

  constructor(public _service: PaisesService) {}

  ngOnInit() {
    this._service.getPaises().subscribe({
      next: (data: Pais[]) => {
        this.paises = data;
        this.paisesFiltrados = data;
        this.extraerRegiones();
        this.cargando = false;
      },
      error: err => {
        console.error('Error al cargar países:', err);
        this.error = 'Error al cargar los datos de países';
        this.cargando = false;
      },
    });
  }

  extraerRegiones() {
    const regionesUnicas = new Set(this.paises.map(p => p.region));
    this.regiones = Array.from(regionesUnicas).sort();
  }

  aplicarFiltros() {
    this.paisesFiltrados = this.paises.filter(pais => {
      // Filtro por búsqueda (nombre común, oficial o capital)
      const cumpleBusqueda =
        this.terminoBusqueda === '' ||
        pais.name.common.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        pais.name.official.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        (pais.capital && pais.capital[0]?.toLowerCase().includes(this.terminoBusqueda.toLowerCase()));

      // Filtro por región
      const cumpleRegion = this.regionSeleccionada === '' || pais.region === this.regionSeleccionada;

      return cumpleBusqueda && cumpleRegion;
    });
  }

  limpiarFiltros() {
    this.terminoBusqueda = '';
    this.regionSeleccionada = '';
    this.paisesFiltrados = this.paises;
  }

  get totalPaisesMostrados(): number {
    return this.paisesFiltrados.length;
  }
}

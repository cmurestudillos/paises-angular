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
  cargando = true;
  error = '';

  terminoBusqueda = '';
  regionSeleccionada: string | null = null;
  regiones: string[] = [];
  skeletonArray = Array(6).fill(0);

  constructor(public _service: PaisesService) {}

  ngOnInit(): void {
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

  extraerRegiones(): void {
    const regionesUnicas = new Set(this.paises.map(p => p.region));
    this.regiones = Array.from(regionesUnicas).sort();
  }

  aplicarFiltros(): void {
    this.paisesFiltrados = this.paises.filter(pais => {
      const cumpleBusqueda =
        !this.terminoBusqueda ||
        pais.name.common.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        pais.name.official.toLowerCase().includes(this.terminoBusqueda.toLowerCase()) ||
        (pais.capital && pais.capital[0]?.toLowerCase().includes(this.terminoBusqueda.toLowerCase()));

      const cumpleRegion = !this.regionSeleccionada || pais.region === this.regionSeleccionada;

      return cumpleBusqueda && cumpleRegion;
    });
  }

  limpiarFiltros(): void {
    this.terminoBusqueda = '';
    this.regionSeleccionada = null;
    this.paisesFiltrados = this.paises;
  }

  formatPoblacion(pop: number): string {
    if (pop >= 1_000_000) return (pop / 1_000_000).toFixed(1) + 'M';
    if (pop >= 1_000) return Math.round(pop / 1_000) + 'K';
    return pop.toString();
  }

  get totalPaisesMostrados(): number {
    return this.paisesFiltrados.length;
  }
}

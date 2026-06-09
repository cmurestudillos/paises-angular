import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse, Pais } from '../models/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  private url: string = 'https://countries-api-service.vercel.app/api/countries';

  constructor(private _http: HttpClient) {}

  getPaises(): Observable<Pais[]> {
    return this._http.get<ApiResponse>(this.url).pipe(map(response => response.data));
  }
}

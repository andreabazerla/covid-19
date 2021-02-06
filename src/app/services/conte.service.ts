import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConteService {
  private API: string = '/api/';
  private conteUrl: string = this.API + 'conte';

  constructor(private httpClient: HttpClient) {}

  getZona(): Observable<any> {
    return this.httpClient.get<boolean>(this.conteUrl);
  }

  updateZona(value: string): Observable<boolean> {
    return this.httpClient.post<boolean>(this.conteUrl, { zona: value });
  }
}

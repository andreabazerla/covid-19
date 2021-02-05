import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinaService {

  private cinaUrl = 'api/cina';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  updatePandemia(pandemia: boolean): Observable<boolean> {
    return this.httpClient.post<boolean>(this.cinaUrl, pandemia, this.httpOptions);
  }
}

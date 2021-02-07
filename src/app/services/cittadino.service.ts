import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CittadinoService {
  private API: string = '/api/';
  private cittadinoUrl: string = this.API + 'cittadino';

  constructor(private httpClient: HttpClient) {}

  getMascherine(): Observable<number> {
    return this.httpClient.get<number>(this.cittadinoUrl);
  }

  updateMascherine(mascherine: number): Observable<number> {
    return this.httpClient.post<number>(this.cittadinoUrl, {
      mascherine,
    });
  }
}

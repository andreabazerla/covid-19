import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PfizerService {
  private API: string = '/api/';
  private pfizerUrl: string = this.API + 'pfizer';

  private vaccino = new BehaviorSubject<boolean>(null);
  vaccino$ = this.vaccino.asObservable();

  constructor(private httpClient: HttpClient) {
    this.initVaccino();
  }

  initVaccino(): any {
    return this.getVaccino().subscribe((res) => {
      this.vaccino.next(res.vaccino);
    });
  }

  getVaccino(): Observable<any> {
    return this.httpClient.get<boolean>(this.pfizerUrl);
  }

  updateVaccino(value: boolean): Observable<boolean> {
    return this.httpClient
      .post<boolean>(this.pfizerUrl, { vaccino: value })
      .pipe(tap((_) => this.vaccino.next(value)));
  }
}

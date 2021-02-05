import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CinaService {
  private API: string = '/api/';
  private cinaUrl: string = this.API + 'cina';

  private pandemia = new BehaviorSubject<boolean>(null);
  pandemia$ = this.pandemia.asObservable();

  constructor(private httpClient: HttpClient) {
    this.initPandemia();
  }

  initPandemia(): any {
    return this.getPandemia().subscribe((res) => {
      this.pandemia.next(res.pandemia);
    });
  }

  getPandemia(): Observable<any> {
    return this.httpClient.get<boolean>(this.cinaUrl);
  }

  updatePandemia(value: boolean): Observable<boolean> {
    return this.httpClient
      .post<boolean>(this.cinaUrl, { pandemia: value })
      .pipe(tap((_) => this.pandemia.next(value)));
  }
}

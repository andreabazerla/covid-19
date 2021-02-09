import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CittadinoService {
  private readonly _mascherine = new BehaviorSubject<number>(0);
  readonly mascherine$ = this._mascherine.asObservable();

  constructor() {}

  get mascherine(): number {
    return this._mascherine.getValue();
  }

  set mascherine(value: number) {
    this._mascherine.next(value);
  }
}

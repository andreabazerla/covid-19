import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConteService {
  private readonly _zona = new BehaviorSubject<string>('');
  readonly zona$ = this._zona.asObservable();

  constructor() {}

  get zona(): string {
    return this._zona.getValue();
  }

  set zona(value: string) {
    this._zona.next(value);
  }
}

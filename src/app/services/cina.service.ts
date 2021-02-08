import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinaService {
  private readonly _pandemia = new BehaviorSubject<boolean>(false);
  readonly pandemia$ = this._pandemia.asObservable();

  constructor() {}

  get pandemia(): boolean {
    return this._pandemia.getValue();
  }

  set pandemia(value: boolean) {
    this._pandemia.next(value);
  }
}

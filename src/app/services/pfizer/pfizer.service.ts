import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PfizerService {
  private readonly _vaccino = new BehaviorSubject<boolean>(false);
  readonly vaccino$ = this._vaccino.asObservable();

  constructor() {}

  get vaccino(): boolean {
    return this._vaccino.getValue();
  }

  set vaccino(value: boolean) {
    this._vaccino.next(value);
  }
}

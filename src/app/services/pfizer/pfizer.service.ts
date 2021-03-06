import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from '../../../app/enums/state.enum';
import { Value } from '../../../app/enums/value.enum';
import { Checkbox } from '../../../app/models/inputs/checkbox';

@Injectable({
  providedIn: 'root',
})
export class PfizerService {
  private readonly _vaccino = new BehaviorSubject<Checkbox>(new Checkbox(State.DISABLE, Value.FALSE));
  readonly vaccino$ = this._vaccino.asObservable();

  constructor() {}

  get vaccino(): Checkbox {
    return this._vaccino.getValue();
  }

  set vaccino(value: Checkbox) {
    this._vaccino.next(value);
  }
}

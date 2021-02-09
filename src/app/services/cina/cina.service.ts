import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/enums/state.enum';
import { Value } from 'src/app/enums/value.enum';
import { Checkbox } from 'src/app/models/inputs/checkbox';

@Injectable({
  providedIn: 'root',
})
export class CinaService {
  private readonly _pandemia = new BehaviorSubject<Checkbox>(new Checkbox(State.ENABLE, Value.FALSE));
  readonly pandemia$ = this._pandemia.asObservable();

  constructor() {}

  get pandemia(): Checkbox {
    return this._pandemia.getValue();
  }

  set pandemia(value: Checkbox) {
    this._pandemia.next(value);
  }
}

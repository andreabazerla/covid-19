import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { State } from 'src/app/enums/state.enum';
import { Zona } from 'src/app/enums/zona.enum';
import { Select } from 'src/app/models/inputs/select';

@Injectable({
  providedIn: 'root',
})
export class ConteService {
  private readonly _zona = new BehaviorSubject<Select>(
    new Select(State.DISABLE, Zona.BIANCA)
  );
  readonly zona$ = this._zona.asObservable();

  constructor() {}

  get zona(): Select {
    return this._zona.getValue();
  }

  set zona(value: Select) {
    this._zona.next(value);
  }
}

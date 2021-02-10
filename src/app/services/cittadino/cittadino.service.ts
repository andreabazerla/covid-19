import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { State } from 'src/app/enums/state.enum';
import { Button } from 'src/app/models/inputs/button';

@Injectable({
  providedIn: 'root',
})
export class CittadinoService {
  private readonly _mascherine = new BehaviorSubject<number>(0);
  readonly mascherine$ = this._mascherine.asObservable();

  private readonly _universita = new BehaviorSubject<Button>(
    new Button(State.ENABLE)
  );
  readonly universita$ = this._universita.asObservable();

  private readonly _farmacia = new BehaviorSubject<Button>(
    new Button(State.DISABLE)
  );
  readonly farmacia$ = this._farmacia.asObservable();

  private readonly _cane = new BehaviorSubject<Button>(
    new Button(State.ENABLE)
  );
  readonly cane$ = this._cane.asObservable();

  private readonly _ufficio = new BehaviorSubject<Button>(
    new Button(State.ENABLE)
  );
  readonly ufficio$ = this._ufficio.asObservable();

  private readonly _bar = new BehaviorSubject<Button>(new Button(State.ENABLE));
  readonly bar$ = this._bar.asObservable();

  constructor() {}

  get mascherine(): number {
    return this._mascherine.getValue();
  }

  set mascherine(value: number) {
    this._mascherine.next(value);
  }

  get universita(): Button {
    return this._universita.getValue();
  }

  set universita(value: Button) {
    this._universita.next(value);
  }

  get farmacia(): Button {
    return this._farmacia.getValue();
  }

  set farmacia(value: Button) {
    this._farmacia.next(value);
  }

  get cane(): Button {
    return this._cane.getValue();
  }

  set cane(value: Button) {
    this._cane.next(value);
  }

  get ufficio(): Button {
    return this._ufficio.getValue();
  }

  set ufficio(value: Button) {
    this._ufficio.next(value);
  }

  get bar(): Button {
    return this._bar.getValue();
  }

  set bar(value: Button) {
    this._bar.next(value);
  }
}

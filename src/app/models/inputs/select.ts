import { State } from '../../../app/enums/state.enum';
import { Zona } from '../../../app/enums/zona.enum';

export class Select {
  state: State;
  zona: Zona;

  constructor(state: State, zona: Zona) {
    this.state = state;
    this.zona = zona;
  }
}

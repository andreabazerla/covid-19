import { State } from 'src/app/enums/state.enum';
import { Zona } from 'src/app/enums/zona.enum';

export class Select {
  state: State;
  zona: Zona;

  constructor(state: State, zona: Zona) {
    this.state = state;
    this.zona = zona;
  }
}

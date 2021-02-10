import { State } from 'src/app/enums/state.enum';

export class Button {
  state: State;

  constructor(state: State) {
    this.state = state;
  }
}

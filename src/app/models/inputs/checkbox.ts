import { State } from "../../enums/state.enum";
import { Value } from "../../enums/value.enum";

export class Checkbox {
  state: State
  value: Value

  constructor(state: State, value: Value) {
    this.state = state;
    this.value = value;
  }
}

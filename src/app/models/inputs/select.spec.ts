import { State } from '../../../app/enums/state.enum';
import { Zona } from '../../../app/enums/zona.enum';
import { Select } from './select';

describe('Select', () => {
  it('should create an instance', () => {
    expect(new Select(State.DISABLE, Zona.BIANCA)).toBeTruthy();
  });
});

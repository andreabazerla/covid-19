import { State } from 'src/app/enums/state.enum';
import { Button } from './button';

describe('Button', () => {
  it('should create an instance', () => {
    expect(new Button(State.DISABLE)).toBeTruthy();
  });
});

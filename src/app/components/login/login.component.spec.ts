import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const menuCina: string = 'Cina';
  const menuPfizer: string = 'Pfizer';
  const menuConte: string = 'Conte';
  const menuCittadino: string = 'Cittadino';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as Cina button text 'Cina'`, () => {
    expect(component.menuCina).toEqual(menuCina);
  });

  it(`should have as Pfizer button text 'Pfizer'`, () => {
    expect(component.menuPfizer).toEqual(menuPfizer);
  });

  it(`should have as Conte button text 'Conte'`, () => {
    expect(component.menuConte).toEqual(menuConte);
  });

  it(`should have as Cittadino button text 'Cittadino'`, () => {
    expect(component.menuCittadino).toEqual(menuCittadino);
  });
});

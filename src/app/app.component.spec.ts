import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { State } from './enums/state.enum';
import { Value } from './enums/value.enum';

describe('AppComponent', () => {
  let component: AppComponent;
  let componentFixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  const menu: string = 'Menu';
  const menuLogin: string = 'Login';
  const menuLogger: string = 'Logger';
  const labelPandemia: string = 'Pandemia';
  const labelVaccino: string = 'Vaccino';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(AppComponent);
    component = componentFixture.componentInstance;
    debugElement = componentFixture.debugElement;

    component.ngOnInit();
    componentFixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Covid-19'`, () => {
    expect(component.title).toEqual('Covid-19');
  });

  it('should render title', () => {
    const compiled = componentFixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Covid-19');
  });

  it(`should have as menu text 'Menu'`, () => {
    expect(component.menu).toEqual(menu);
  });

  it('should render menu text', () => {
    const compiled = componentFixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain(menu);
  });

  // TODO: test di rendering dopo implementazione di Material Design

  it(`should have as menu login text 'Login'`, () => {
    expect(component.menuLogin).toEqual(menuLogin);
  });

  it(`should have as menu logger text 'Logger'`, () => {
    expect(component.menuLogger).toEqual(menuLogger);
  });

  it(`should have as pandemia label text 'Pandemia'`, () => {
    expect(component.labelPandemia).toEqual(labelPandemia);
  });

  it(`should have as pandemia label text 'Pandemia'`, () => {
    expect(component.labelPandemia).toEqual(labelPandemia);
  });

  it('initial pandemia state to enable', () => {
    expect(component.pandemia.state).toBe(State.ENABLE);
  });

  it('initial pandemia value to false', () => {
    expect(component.pandemia.value).toBe(Value.FALSE);
  });

  it('initial vaccino state to disable', () => {
    expect(component.vaccino.state).toBe(State.DISABLE);
  });

  it('initial vaccino value to false', () => {
    expect(component.vaccino.value).toBe(Value.FALSE);
  });
});

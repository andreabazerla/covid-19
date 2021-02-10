import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NavigationComponent } from './navigation.component';
import { DebugElement } from '@angular/core';
import { State } from '../enums/state.enum';
import { Value } from '../enums/value.enum';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularMaterialModule } from '../material/angular-material.module';
import { LoggerComponent } from '../components/logger/logger.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let componentFixture: ComponentFixture<NavigationComponent>;

  const menu: string = 'Menu';
  const menuLogin: string = 'Login';
  const menuLogger: string = 'Logger';
  const labelPandemia: string = 'Pandemia';
  const labelVaccino: string = 'Vaccino';

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavigationComponent, LoggerComponent],
        imports: [
          NoopAnimationsModule,
          AngularMaterialModule,
          RouterTestingModule
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    componentFixture = TestBed.createComponent(NavigationComponent);
    component = componentFixture.componentInstance;

    component.ngOnInit();
    componentFixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Covid-19'`, () => {
    expect(component.title).toEqual('Covid-19');
  });

  it(`should have as menu text 'Menu'`, () => {
    expect(component.menu).toEqual(menu);
  });

  it(`should have as menu login text 'Login'`, () => {
    expect(component.menuLogin).toEqual(menuLogin);
  });

  it(`should have as menu logger text 'Logger'`, () => {
    expect(component.menuLogger).toEqual(menuLogger);
  });

  it(`should have as pandemia label text 'Pandemia'`, () => {
    expect(component.labelPandemia).toEqual(labelPandemia);
  });

  it(`should have as vaccino label text 'Vaccino'`, () => {
    expect(component.labelVaccino).toEqual(labelVaccino);
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

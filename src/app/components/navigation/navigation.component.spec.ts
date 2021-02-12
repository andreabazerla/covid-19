import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AngularMaterialModule } from '../../../app/modules/material/angular-material.module';

import { NavigationComponent } from './navigation.component';
import { LoggerComponent } from '../logger/logger.component';

import { State } from '../../../app/enums/state.enum';
import { Value } from '../../../app/enums/value.enum';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let componentFixture: ComponentFixture<NavigationComponent>;

  const menu: string = 'Menu';
  const menuLogin: string = 'Login';
  const menuHome: string = 'Home';
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

  it(`should have as menu home text 'Home'`, () => {
    expect(component.menuHome).toEqual(menuHome);
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

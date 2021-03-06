import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { State } from '../../../app/enums/state.enum';
import { Value } from '../../../app/enums/value.enum';
import { Zona } from '../../../app/enums/zona.enum';
import { Checkbox } from '../../../app/models/inputs/checkbox';

import { CittadinoComponent } from './cittadino.component';

describe('CittadinoComponent', () => {
  let component: CittadinoComponent;
  let componentFixture: ComponentFixture<CittadinoComponent>;
  let debugElement: DebugElement;

  const title: string = 'Cittadino';
  const labelZona: string = 'Zona';
  const optionZonaGialla: string = 'Gialla';
  const optionZonaArancione: string = 'Arancione';
  const optionZonaRossa: string = 'Rossa';
  const labelMascherine: string = 'Mascherine';
  const labelActions: string = 'Esci di casa';
  const buttonUniversita: string = 'Università';
  const buttonFarmacia: string = 'Farmacia';
  const buttonCane: string = 'Cane';
  const buttonUfficio: string = 'Ufficio';
  const buttonBar: string = 'Bar';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CittadinoComponent],
    }).compileComponents();
  });

  beforeEach(async() => {
    componentFixture = TestBed.createComponent(CittadinoComponent);
    component = componentFixture.componentInstance;
    debugElement = componentFixture.debugElement;

    component.ngOnInit();
    componentFixture.detectChanges();
    await componentFixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Cittadino'`, () => {
    expect(component.title).toEqual(title);
  });

  it(`should have as zona label text 'Zona'`, () => {
    expect(component.labelZona).toEqual(labelZona);
  });

  it(`should have as zona gialla option text 'Gialla'`, () => {
    expect(component.optionZonaGialla).toEqual(optionZonaGialla);
  });

  it(`should have as zona arancione option text 'Arancione'`, () => {
    expect(component.optionZonaArancione).toEqual(optionZonaArancione);
  });

  it(`should have as zona rossa option text 'Rossa'`, () => {
    expect(component.optionZonaRossa).toEqual(optionZonaRossa);
  });

  it(`should have as mascherine label text 'Mascherine'`, () => {
    expect(component.labelMascherine).toEqual(labelMascherine);
  });

  it(`should have as actions label text 'Esci di casa'`, () => {
    expect(component.labelActions).toEqual(labelActions);
  });

  it(`should have as università button text 'Università'`, () => {
    expect(component.buttonUniversita).toEqual(buttonUniversita);
  });

  it(`should have as farmacia button text 'Farmacia'`, () => {
    expect(component.buttonFarmacia).toEqual(buttonFarmacia);
  });

  it(`should have as cane button text 'Cane'`, () => {
    expect(component.buttonCane).toEqual(buttonCane);
  });

  it(`should have as ufficio button text 'Ufficio'`, () => {
    expect(component.buttonUfficio).toEqual(buttonUfficio);
  });

  it(`should have as bar button text 'Bar'`, () => {
    expect(component.buttonBar).toEqual(buttonBar);
  });

  it('initial zona state to disable', () => {
    expect(component.zona.state).toBe(State.DISABLE)
  });

  it('initial zona select state to disable', () => {
    expect(component.zonaFormControl.disabled).toBeTruthy();
  });

  it('initial zona select value to Zona Bianca', () => {
    expect(component.zona.zona).toBe(Zona.BIANCA);
  });

  it('should start with a mascherine counter at `0`', () => {
    expect(component.mascherine).toEqual(0);
  });

  it('should render mascherine counter', () => {
    const compiled = componentFixture.nativeElement;
    expect(compiled.querySelector('.mascherine').textContent).toContain('0');
  });

  it('should be able to increment the mascherine counter from 0 to 10 when pandemia is true and vaccino false', () => {
    component.pandemia = new Checkbox(State.ENABLE, Value.TRUE);
    component.vaccino = new Checkbox(State.ENABLE, Value.FALSE);
    component.mascherine = 0;

    component.goFarmacia();

    expect(component.mascherine).toEqual(10);
  });

  it('should be able to increment the mascherine counter from 1 to 10 when pandemia is true and vaccino false', () => {
    component.pandemia = new Checkbox(State.ENABLE, Value.TRUE);
    component.vaccino = new Checkbox(State.ENABLE, Value.FALSE);
    component.mascherine = 1;

    component.goFarmacia();

    expect(component.mascherine).toEqual(10);
  });

  it('should render farmacia button disabled if pandemia false and vaccino false', () => {
    component.pandemia = new Checkbox(State.ENABLE, Value.FALSE);
    component.vaccino = new Checkbox(State.DISABLE, Value.FALSE);

    const compiled = componentFixture.nativeElement;
    expect(compiled.querySelector('.button-farmacia').disabled).toBeTrue();
  });
});

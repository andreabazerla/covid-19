import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Zona } from 'src/app/enums/zona.enum';

import { ConteComponent } from './conte.component';

describe('ConteComponent', () => {
  let component: ConteComponent;
  let componentFixture: ComponentFixture<ConteComponent>;
  let debugElement: DebugElement;

  const title: string = 'Conte';
  const labelZona: string = 'Zona';
  const optionZonaGialla: string = 'Gialla';
  const optionZonaArancione: string = 'Arancione';
  const optionZonaRossa: string = 'Rossa';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ConteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(ConteComponent);
    component = componentFixture.componentInstance;
    debugElement = componentFixture.debugElement;

    component.ngOnInit();
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Conte'`, () => {
    expect(component.title).toEqual(title);
  });

  it('should render title', () => {
    const compiled = componentFixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(title);
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

  it('initial zona select state to disable', () => {
    expect(component.zona.disabled).toBeTruthy();
  });

  it('initial zona select value to Zona Bianca', () => {
    expect(component.zona.value).toBe(Zona.BIANCA);
  });

});

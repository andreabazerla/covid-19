import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Value } from 'src/app/enums/value.enum';

import { PfizerComponent } from './pfizer.component';

describe('PfizerComponent', () => {
  let component: PfizerComponent;
  let componentFixture: ComponentFixture<PfizerComponent>;

  const title: string = 'Pfizer';
  const labelVaccino: string = 'Vaccino';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PfizerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(PfizerComponent);
    component = componentFixture.componentInstance;

    component.ngOnInit();
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Cina'`, () => {
    expect(component.title).toEqual(title);
  });

  it(`should have as vaccino label text 'Vaccino'`, () => {
    expect(component.labelVaccino).toEqual(labelVaccino);
  });

  it('initial pandemia checkbox state to enable', () => {
    expect(component.vaccino.disabled).toBeTruthy();
  });

  it('initial pandemia checkbox value to false', () => {
    expect(component.vaccino.value).toBe(Value.FALSE);
  });
});

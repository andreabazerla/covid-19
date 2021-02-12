import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Value } from '../../../app/enums/value.enum';

import { CinaComponent } from './cina.component';

describe('CinaComponent', () => {
  let component: CinaComponent;
  let componentFixture: ComponentFixture<CinaComponent>;

  const title: string = 'Cina';
  const labelPandemia: string = 'Pandemia';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        CinaComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(CinaComponent);
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

  it(`should have as pandemia label text 'Pandemia'`, () => {
    expect(component.labelPandemia).toEqual(labelPandemia);
  });

  it('initial pandemia checkbox state to enable', () => {
    expect(component.pandemia.disabled).toBeFalsy();
  });

  it('initial pandemia checkbox value to false', () => {
    expect(component.pandemia.value).toBe(Value.FALSE)
  });

});

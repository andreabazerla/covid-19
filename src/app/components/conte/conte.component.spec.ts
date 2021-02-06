import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteComponent } from './conte.component';

describe('ConteComponent', () => {
  let component: ConteComponent;
  let fixture: ComponentFixture<ConteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

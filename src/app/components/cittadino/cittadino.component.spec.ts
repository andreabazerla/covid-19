import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CittadinoComponent } from './cittadino.component';

describe('CittadinoComponent', () => {
  let component: CittadinoComponent;
  let fixture: ComponentFixture<CittadinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CittadinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CittadinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

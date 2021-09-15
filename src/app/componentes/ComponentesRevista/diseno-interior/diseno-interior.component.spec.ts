import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisenoInteriorComponent } from './diseno-interior.component';

describe('DisenoInteriorComponent', () => {
  let component: DisenoInteriorComponent;
  let fixture: ComponentFixture<DisenoInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisenoInteriorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisenoInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

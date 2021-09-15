import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArticComponent } from './form-artic.component';

describe('FormArticComponent', () => {
  let component: FormArticComponent;
  let fixture: ComponentFixture<FormArticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

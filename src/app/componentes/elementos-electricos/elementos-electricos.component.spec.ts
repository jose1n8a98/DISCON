import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosElectricosComponent } from './elementos-electricos.component';

describe('ElementosElectricosComponent', () => {
  let component: ElementosElectricosComponent;
  let fixture: ComponentFixture<ElementosElectricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosElectricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosElectricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

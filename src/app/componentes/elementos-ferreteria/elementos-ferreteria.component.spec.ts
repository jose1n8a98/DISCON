import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosFerreteriaComponent } from './elementos-ferreteria.component';

describe('ElementosFerreteriaComponent', () => {
  let component: ElementosFerreteriaComponent;
  let fixture: ComponentFixture<ElementosFerreteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosFerreteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosFerreteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

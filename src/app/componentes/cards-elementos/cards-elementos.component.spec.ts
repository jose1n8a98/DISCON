import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsElementosComponent } from './cards-elementos.component';

describe('CardsElementosComponent', () => {
  let component: CardsElementosComponent;
  let fixture: ComponentFixture<CardsElementosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsElementosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

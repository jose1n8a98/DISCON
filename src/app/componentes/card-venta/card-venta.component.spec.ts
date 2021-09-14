import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVentaComponent } from './card-venta.component';

describe('CardVentaComponent', () => {
  let component: CardVentaComponent;
  let fixture: ComponentFixture<CardVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

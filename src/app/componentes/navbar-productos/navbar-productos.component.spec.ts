import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProductosComponent } from './navbar-productos.component';

describe('NavbarProductosComponent', () => {
  let component: NavbarProductosComponent;
  let fixture: ComponentFixture<NavbarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

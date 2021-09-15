import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRevistasComponent } from './nav-revistas.component';

describe('NavRevistasComponent', () => {
  let component: NavRevistasComponent;
  let fixture: ComponentFixture<NavRevistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRevistasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavRevistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteCulturaComponent } from './arte-cultura.component';

describe('ArteCulturaComponent', () => {
  let component: ArteCulturaComponent;
  let fixture: ComponentFixture<ArteCulturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArteCulturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArteCulturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

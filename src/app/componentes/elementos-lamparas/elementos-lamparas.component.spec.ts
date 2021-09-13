import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosLamparasComponent } from './elementos-lamparas.component';

describe('ElementosLamparasComponent', () => {
  let component: ElementosLamparasComponent;
  let fixture: ComponentFixture<ElementosLamparasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosLamparasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosLamparasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

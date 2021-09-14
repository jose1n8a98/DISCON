import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosMoviliarioComponent } from './elementos-moviliario.component';

describe('ElementosMoviliarioComponent', () => {
  let component: ElementosMoviliarioComponent;
  let fixture: ComponentFixture<ElementosMoviliarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosMoviliarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosMoviliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

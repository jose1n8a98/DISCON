import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementosConcreteItemsComponent } from './elementos-concrete-items.component';

describe('ElementosConcreteItemsComponent', () => {
  let component: ElementosConcreteItemsComponent;
  let fixture: ComponentFixture<ElementosConcreteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementosConcreteItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementosConcreteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

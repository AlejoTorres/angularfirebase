import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeComponent } from './item-de.component';

describe('ItemDeComponent', () => {
  let component: ItemDeComponent;
  let fixture: ComponentFixture<ItemDeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

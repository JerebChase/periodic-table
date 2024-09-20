import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementListItemComponent } from './element-list-item.component';

describe('ElementListItemComponent', () => {
  let component: ElementListItemComponent;
  let fixture: ComponentFixture<ElementListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2componentComponent } from './component2component.component';

describe('Component2componentComponent', () => {
  let component: Component2componentComponent;
  let fixture: ComponentFixture<Component2componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRoutingPage } from './test-routing.page';

describe('TestRoutingPage', () => {
  let component: TestRoutingPage;
  let fixture: ComponentFixture<TestRoutingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestRoutingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRoutingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstviewPage } from './firstview.page';

describe('FirstviewPage', () => {
  let component: FirstviewPage;
  let fixture: ComponentFixture<FirstviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

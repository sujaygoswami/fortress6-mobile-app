import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantsPage } from './constants.page';

describe('ConstantsPage', () => {
  let component: ConstantsPage;
  let fixture: ComponentFixture<ConstantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstantsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

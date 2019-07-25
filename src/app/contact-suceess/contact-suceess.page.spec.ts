import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSuceessPage } from './contact-suceess.page';

describe('ContactSuceessPage', () => {
  let component: ContactSuceessPage;
  let fixture: ComponentFixture<ContactSuceessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSuceessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSuceessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesContentPage } from './our-services-content.page';

describe('OurServicesContentPage', () => {
  let component: OurServicesContentPage;
  let fixture: ComponentFixture<OurServicesContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurServicesContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

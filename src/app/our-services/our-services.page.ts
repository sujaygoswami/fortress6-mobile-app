import { Component, OnInit } from '@angular/core';

import { OurServicesContentPage } from '../services/our-services-content/our-services-content.page';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.page.html',
  styleUrls: ['./our-services.page.scss'],
})
export class OurServicesPage implements OnInit {

  constructor(private ourserviceContentPage: OurServicesContentPage) { }

  ngOnInit() {
  }

  

}

import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { OurServicesContentPage } from '../services/our-services-content/our-services-content.page';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {


  


  private ourservicescontent;

  constructor(private route: ActivatedRoute, private ourserviceContentPage: OurServicesContentPage) { }


  ionViewWillEnter(){
    let ourservicecontentId = this.route.snapshot.paramMap.get('id');
    this.ourservicescontent = this.ourserviceContentPage.getTodo(ourservicecontentId);
  }

  ngOnInit() {
  }

}

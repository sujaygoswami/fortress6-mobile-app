import { Component, OnInit } from '@angular/core';

import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-platform-detail',
  templateUrl: './platform-detail.page.html',
  styleUrls: ['./platform-detail.page.scss'],
})
export class PlatformDetailPage implements OnInit {


	platform:any

  constructor(navParams: NavParams,public viewCtrl: ModalController) { 

  	this.platform=navParams.get('platform')	

  }

  ngOnInit() {
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}

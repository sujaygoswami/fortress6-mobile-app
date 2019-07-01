import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-firstview',
  templateUrl: './firstview.page.html',
  styleUrls: ['./firstview.page.scss'],
})
export class FirstviewPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }


   goNavigationPanel() {
    this.router.navigateByUrl('/navigation-panel');
  }

  


  firstPage = [
		    {
		      image: "assets/images/start-page-image.jpg",
          excerpt: "TURN A BUSINESS INTO SUCCESS",
		    }
  		];

}

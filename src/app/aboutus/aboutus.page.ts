import { Component, OnInit } from '@angular/core';
import { ConstantsPage } from '../constants/constants.page';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

  constructor(private constantpage: ConstantsPage) { }

  ngOnInit() {
  }


  

  pageContent = [
  	{
      title: "About Us",
      text: "<p>Fortress6 Technologies is an obsessive bunch of young and enthusiast professionals who strive to offer innovative web development, web design and managed outsourcing services with a unique combination of technology and creativity. Our constant struggle and commitment to quality are the main driving forces behind our unprecedented success and growth.</p><p>With deep industry experience and technical expertise of more than ten years, we got the opportunity to work closely with some top organizations and technological brands and stimulating them with core IT solutions and marketing ideas. We offer tailored business solutions to our clients and this makes us fortunate to work with more than 100 clients across the globe.</p>",
    }
  ];

}

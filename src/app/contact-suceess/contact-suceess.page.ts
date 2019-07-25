import { Component, OnInit } from '@angular/core';
import { ConstantsPage } from '../constants/constants.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-suceess',
  templateUrl: './contact-suceess.page.html',
  styleUrls: ['./contact-suceess.page.scss'],
})
export class ContactSuceessPage implements OnInit {

  constructor(private constantpage: ConstantsPage) { }

  ngOnInit() {
  }

  pageContent = [
  	{
      title: "Thank you <i class='fa fa-smile-o'></i>",
      text: "<p>Your information and query has been submitted to us successfuly. We will back to you very soon.</p>",
    }
  ];

}

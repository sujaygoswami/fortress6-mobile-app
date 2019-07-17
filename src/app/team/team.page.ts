import { Component, OnInit } from '@angular/core';

import { ConstantsPage } from '../constants/constants.page';

import * as $ from "jquery";

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  constructor(private constantpage: ConstantsPage) { }

  ngOnInit() {
  	$(document).ready(function(){

  		$('.social a').each(function(){
  			if ($(this).attr('href') == '') { 
   			 	$(this).parent().hide();
			}
  		});
        


    });
  }


  teamsinfo = [
  	{
      dp: "../assets/images/team-dp-mini.jpg",
      name: "Aftab Alam",
      designation: "CEO",
      facebook: "facebook.com",
      twitter: "twitter.com",
      googleplus: "google.com",
    },
    {
      dp: "../assets/images/team-dp-mini.jpg",
      name: "Arindam Chowdhury",
      designation: "Senior Developer",
      facebook: "facebook.com",
      twitter: "twitter.com",
      googleplus: "google.com",
    },
    {
      dp: "../assets/images/team-dp-mini.jpg",
      name: "Saurav Dalai",
      designation: "Senior Developer",
      facebook: "facebook.com",
      twitter: "",
      googleplus: "google.com",
    }
  ];

}

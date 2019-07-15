import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.page.html',
  styleUrls: ['./navigation-panel.page.scss'],
})
export class NavigationPanelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  navpanelBackImage = [
		    {
		      image: "assets/images/navigation-page-image.jpg",
		    }
  		];



  navigations = [
  	{
      icon: "fa-birthday-cake",
      text: "Foundation",
      link: "/foundation",
    },
    {
      icon: "fa-group",
      text: "about us",
      link: "/aboutus",
    },
    {
      icon: "fa-code",
      text: "Services",
      link: "/our-services",
    },
    {
      icon: "fa-list",
      text: "Platforms",
      link: "/platforms",
    },
    {
      icon: "fa-black-tie",
      text: "Team",
      link: "/team",
    },
    {
      icon: "fa-thumbs-o-up",
      text: "Carrer",
    },
    {
      icon: "fa-facebook",
      text: "Follow US",
    },
    {
      icon: "fa-phone",
      text: "Contact Us",
    }
  ];


 

}

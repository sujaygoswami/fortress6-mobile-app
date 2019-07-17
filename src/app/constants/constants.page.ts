import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';


interface ConstantsValuesLeft {
  content: string,
  icon: string,
  action: string
}

interface ConstantsValuesRight {
  content: string,
  icon: string
}

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-constants',
  templateUrl: './constants.page.html',
  styleUrls: ['./constants.page.scss'],
})
export class ConstantsPage implements OnInit {

  public constantsvaluesleft: ConstantsValuesLeft[] = [];

  public constantsvaluesright: ConstantsValuesRight[] = [];

  constructor() { 

    // Set some test todos
    this.constantsvaluesleft = [
      { content: 'contact(at)fortress6.com', icon: 'fa-envelope', action: 'mailto'},
      { content: '03365555256', icon: 'fa-phone', action: 'tel'},
    ];

    this.constantsvaluesright = [
      { content: 'https://www.facebook.com/Fortress6-Technologies-1637880229835858/', icon: 'fa-facebook'},
      { content: 'https://twitter.com/Fortress6Tech', icon: 'fa-twitter'},
    ];

  }

  ngOnInit() {
  }



}

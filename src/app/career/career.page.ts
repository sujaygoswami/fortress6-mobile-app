import { Component, OnInit } from '@angular/core';
import { ConstantsPage } from '../constants/constants.page';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss'],
})
export class CareerPage implements OnInit {


	validations_form: FormGroup;

  constructor(private constantpage: ConstantsPage, public formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  	this.validations_form = this.formBuilder.group({
      
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      query: new FormControl('', Validators.required),
    });
  }


  validation_messages = {
   
    'firstname': [
      { type: 'required', message: 'Name is required.' }
    ],
    'lastname': [
      { type: 'required', message: 'Last name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please wnter a valid email.' }
    ],
    'query': [
      { type: 'required', message: 'Let us know your query' },
    ],
  };

  onSubmit(values){
    console.log(values);
    this.router.navigate(["/contact-suceess"]);
  }

  pageContent = [
  	{
      title: "CURRENT OPENINGS",
      text: "<p>Are you passionate, energetic and a team player? If you have all three skills, Fortress6 Technologies is offering you a platform where you can get the opportunity to work with the best minds of the industry. With industry standard compensation, world-class infrastructure and an effective team of management that believes in nurturing talents, you will get the best environment to work here.If you wish to be a part of our team, please follow our current openings:</p><ul><li>PHP Developer - Mysql/javascript/jquery</li><li>UI Developer - Angularjs/html/css/javascript</li></ul>",
    }
  ];

}

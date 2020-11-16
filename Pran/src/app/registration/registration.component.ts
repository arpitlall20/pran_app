import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export class Personnel{

  email:String

  constructor(){

  }
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public personnel = new Personnel();
  personnelEmailFlag = true;

  constructor(public title:Title, public router:Router) {
    this.title.setTitle("Register with us")
   }

  ngOnInit(): void {
  }

  registerHospital(){
    this.router.navigateByUrl("https://www.cerner.com")
  }

}

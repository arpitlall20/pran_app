import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Site } from '../models/site/site';
import { Address } from '../models/address/address';
import { Hospital } from '../models/hospital/hospital';
import { Admin } from '../models/admin/admin';
import { Contact } from '../models/contact/contact';
import { RegisterService } from '../service/register.service';

class telephone{
  landlineNo:string='';
  landlineStd:string='';
  emergencyNo:string='';
  emergencyStd:string='';
  ambulanceNo:string='';
  ambulanceStd:string='';
  bloodbankNo:string='';
  bloodbankStd:string='';
  tollfreeNo:string='';
  tollfreeStd:string='';
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public Hospital = new Hospital()
  telephone = new telephone()
  personnelEmailFlag = true;

  constructor(public title: Title, public router: Router, public http: HttpClient, public register:RegisterService) {
    this.title.setTitle("Register with us")
    this.Hospital.admin = new Admin()
    this.Hospital.contact = new Contact()
    this.Hospital.site = new Site()
    this.Hospital.site.location = new Address()
  }

  ngOnInit(): void {
  }

  get_details() {
    var pincode = this.Hospital.site.location.pincode
    if (pincode == '') {
      this.Hospital.site.location.state = '';
      this.Hospital.site.location.district = '';
      alert("Please enter Pincode");
    }
    else {
      //fetching the state and district through an api call
      this.Hospital = this.register.getDetails(this.Hospital)
    }
  }

  registerHospital() {
    //Concatenating the phone numbers
    this.Hospital.contact.ambulanceNo =this.telephone.ambulanceStd.concat(this.telephone.ambulanceNo);
    this.Hospital.contact.bloodBankNo =this.telephone.bloodbankStd.concat(this.telephone.bloodbankNo);
    this.Hospital.contact.tollfreeNo =this.telephone.tollfreeStd.concat(this.telephone.tollfreeNo);
    this.Hospital.contact.emergencyNo =this.telephone.emergencyStd.concat(this.telephone.emergencyNo);
    this.Hospital.contact.landlineNo =this.telephone.landlineStd.concat(this.telephone.landlineNo);

    //posting the data to the database
    this.register.registerHospital(this.Hospital)
  }


}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Site } from '../models/site/site';
import { Address } from '../models/address/address';
import { Hospital } from '../models/hospital/hospital';
import { Admin } from '../models/admin/admin';
import { Contact } from '../models/contact/contact';
import { RegisterService } from '../service/register.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

class telephone {
  landlineNo: string = '';
  landlineStd: string = '';
  emergencyNo: string = '';
  emergencyStd: string = '';
  ambulanceNo: string = '';
  ambulanceStd: string = '';
  bloodbankNo: string = '';
  bloodbankStd: string = '';
  tollfreeNo: string = '';
  tollfreeStd: string = '';
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hospitalType: Array<string> = ["Hospital", "Dispensary", "Community Health Centre", "Sub Centre", "Poly Clinic", "Clinic", "Nursing Home", "Medical College / Institute", "Others"]
  form: FormGroup
  public Hospital = new Hospital()
  checkArray: FormArray
  telephone = new telephone()
  personnelEmailFlag = true;

  constructor(public title: Title, public router: Router, public register: RegisterService, public fb: FormBuilder) {
    this.title.setTitle("Register with us")
    this.Hospital.admin = new Admin()
    this.Hospital.contact = new Contact()
    this.Hospital.site = new Site()
    this.Hospital.site.location = new Address()

    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    this.checkArray = this.form.get('checkArray') as FormArray;
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
    this.Hospital.contact.ambulanceNo = this.telephone.ambulanceStd.concat(this.telephone.ambulanceNo);
    this.Hospital.contact.bloodBankNo = this.telephone.bloodbankStd.concat(this.telephone.bloodbankNo);
    this.Hospital.contact.tollfreeNo = this.telephone.tollfreeStd.concat(this.telephone.tollfreeNo);
    this.Hospital.contact.emergencyNo = this.telephone.emergencyStd.concat(this.telephone.emergencyNo);
    this.Hospital.contact.landlineNo = this.telephone.landlineStd.concat(this.telephone.landlineNo);
    this.Hospital.hospitalType = ''
    if (this.checkArray.length > 0) {
      this.checkArray.controls.forEach((item: FormControl) => {
        if (this.Hospital.hospitalType === '')
          this.Hospital.hospitalType = this.Hospital.hospitalType.concat(item.value)
        else
          this.Hospital.hospitalType = this.Hospital.hospitalType.concat(", ", item.value)
      })
    }
    // posting the data to the database
    this.register.registerHospital(this.Hospital)
    this.router.navigate([''])
  }

  mapType(e) {

    if (e.target.checked) {
      this.checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      this.checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          this.checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(this.checkArray.length)
  }


}

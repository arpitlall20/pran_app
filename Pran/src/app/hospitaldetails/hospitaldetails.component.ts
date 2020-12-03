import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { Hospital } from '../models/hospital/hospital';

@Component({
  selector: 'app-hospitaldetails',
  templateUrl: './hospitaldetails.component.html',
  styleUrls: ['./hospitaldetails.component.css']
})
export class HospitaldetailsComponent implements OnInit {

  hospitalType: Array<string> = ["Hospital", "Dispensary", "Community Health Centre", "Sub Centre", "Poly Clinic", "Clinic", "Nursing Home", "Medical College / Institute", "Others"]
  
  public Hospital = new Hospital()
  constructor(public http: HttpClient, public router:Router) {
    this.http.get<Hospital>("http://localhost:8080/testapi").subscribe(
      x => {
        this.Hospital = x
        , console.log(x)
      })
  }

  ngOnInit(): void {

  }
  check(event) {
    alert("working");
    var a = <HTMLInputElement>document.getElementById('firstcb');

    var b = <HTMLInputElement>document.getElementById('secondcb');

    var c = <HTMLInputElement>document.getElementById('thirdcb');

    var d = <HTMLInputElement>document.getElementById('fourthcb');

    if (a.checked && b.checked && c.checked && d.checked)
      alert("working fine");
    else
      alert("Kindly Validate all the fields");


  }
  sendback() {
    alert("asd");
    var a = <HTMLInputElement>document.getElementById('firstcb');
    var b = <HTMLInputElement>document.getElementById('secondcb');
    var c = <HTMLInputElement>document.getElementById('thirdcb');
    var d = <HTMLInputElement>document.getElementById('fourthcb');

    if (d.checked) {
      alert("4th");
      document.getElementById('personnel_name').style.borderColor = "green";
      document.getElementById('personnel_name').style.backgroundColor = "#9ff3b4";
      document.getElementById('personnel_contact').style.borderColor = "green";
      document.getElementById('personnel_contact').style.backgroundColor = "#9ff3b4";
      document.getElementById('personnel_email').style.borderColor = "green";
      document.getElementById('personnel_email').style.backgroundColor = "#9ff3b4";
    }
    else {
      document.getElementById('personnel_name').style.borderColor = "red";
      document.getElementById('personnel_name').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('personnel_contact').style.borderColor = "red";
      document.getElementById('personnel_contact').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('personnel_email').style.borderColor = "red";
      document.getElementById('personnel_email').style.backgroundColor = "rgb(228, 159, 159)";
    }

    if (a.checked) {
      alert("1st");
      document.getElementById('hospitalName').style.borderColor = "green";
      document.getElementById('hospitalName').style.backgroundColor = "#9ff3b4";
      document.getElementById('radio1').style.borderColor = "green";
      document.getElementById('radio1').style.backgroundColor = "#9ff3b4";
      document.getElementById('accreditation').style.borderColor = "green";
      document.getElementById('accreditation').style.backgroundColor = "#9ff3b4";
      document.getElementById('registrationNo').style.borderColor = "green";
      document.getElementById('registrationNo').style.backgroundColor = "#9ff3b4";
    }
    else {
      document.getElementById('hospitalName').style.borderColor = "red";
      document.getElementById('hospitalName').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('radio1').style.borderColor = "red";
      document.getElementById('radio1').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('accreditation').style.borderColor = "red";
      document.getElementById('accreditation').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('registrationNo').style.borderColor = "red";
      document.getElementById('registrationNo').style.backgroundColor = "rgb(228, 159, 159)";

    }

    if (b.checked) {
      alert("2nd");
      document.getElementById('address').style.borderColor = "green";
      document.getElementById('address').style.backgroundColor = "#9ff3b4";
      document.getElementById('pincode').style.borderColor = "green";
      document.getElementById('pincode').style.backgroundColor = "#9ff3b4";
      document.getElementById('city').style.borderColor = "green";
      document.getElementById('city').style.backgroundColor = "#9ff3b4";
      document.getElementById('state').style.borderColor = "green";
      document.getElementById('state').style.backgroundColor = "#9ff3b4";
      document.getElementById('area').style.borderColor = "green";
      document.getElementById('area').style.backgroundColor = "#9ff3b4";
    }
    else {
      document.getElementById('address').style.borderColor = "red";
      document.getElementById('address').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('pincode').style.borderColor = "red";
      document.getElementById('pincode').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('city').style.borderColor = "red";
      document.getElementById('city').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('state').style.borderColor = "red";
      document.getElementById('state').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('area').style.borderColor = "red";
      document.getElementById('area').style.backgroundColor = "rgb(228, 159, 159)";
    }

    if (c.checked) {
      alert("3rd");
      document.getElementById('hospital_telephone_country').style.borderColor = "green";
      document.getElementById('hospital_telephone_country').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_telephone_no').style.borderColor = "green";
      document.getElementById('hospital_telephone_no').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_emergency_country').style.borderColor = "green";
      document.getElementById('hospital_emergency_country').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_emergency_no').style.borderColor = "green";
      document.getElementById('hospital_emergency_no').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_ambulance_country').style.borderColor = "green";
      document.getElementById('hospital_ambulance_country').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_ambulance_no').style.borderColor = "green";
      document.getElementById('hospital_ambulance_no').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_bb_country').style.borderColor = "green";
      document.getElementById('hospital_bb_country').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_bb_no').style.borderColor = "green";
      document.getElementById('hospital_bb_no').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_toll_free_country').style.borderColor = "green";
      document.getElementById('hospital_toll_free_country').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_toll_free_no').style.borderColor = "green";
      document.getElementById('hospital_toll_free_no').style.backgroundColor = "#9ff3b4";
      document.getElementById('mobile_emergency_no').style.borderColor = "green";
      document.getElementById('mobile_emergency_no').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_primary_email').style.borderColor = "green";
      document.getElementById('hospital_primary_email').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_secondary_email').style.borderColor = "green";
      document.getElementById('hospital_secondary_email').style.backgroundColor = "#9ff3b4";
      document.getElementById('hospital_url').style.borderColor = "green";
      document.getElementById('hospital_url').style.backgroundColor = "#9ff3b4";
    }
    else {

      document.getElementById('hospital_telephone_country').style.borderColor = "red";
      document.getElementById('hospital_telephone_country').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_telephone_no').style.borderColor = "red";
      document.getElementById('hospital_telephone_no').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_emergency_country').style.borderColor = "red";
      document.getElementById('hospital_emergency_country').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_emergency_no').style.borderColor = "red";
      document.getElementById('hospital_emergency_no').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_ambulance_country').style.borderColor = "red";
      document.getElementById('hospital_ambulance_country').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_ambulance_no').style.borderColor = "red";
      document.getElementById('hospital_ambulance_no').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_bb_country').style.borderColor = "red";
      document.getElementById('hospital_bb_country').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_bb_no').style.borderColor = "red";
      document.getElementById('hospital_bb_no').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_toll_free_country').style.borderColor = "red";
      document.getElementById('hospital_toll_free_country').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_toll_free_no').style.borderColor = "red";
      document.getElementById('hospital_toll_free_no').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('mobile_emergency_no').style.borderColor = "red";
      document.getElementById('mobile_emergency_no').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_primary_email').style.borderColor = "red";
      document.getElementById('hospital_primary_email').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_secondary_email').style.borderColor = "red";
      document.getElementById('hospital_secondary_email').style.backgroundColor = "rgb(228, 159, 159)";
      document.getElementById('hospital_url').style.borderColor = "red";
      document.getElementById('hospital_url').style.backgroundColor = "rgb(228, 159, 159)";


    }

  }


  filldata() {
    alert("enter");
  }

  sendForValidation(){
    this.http.post<boolean>("http://localhost:8080/validatehospital", this.Hospital.admin).subscribe(x=>{
      console.log(x)
      this.router.navigate([''])
    })
  }


}

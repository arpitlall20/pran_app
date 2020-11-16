import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Hospital} from '../models/hospital'
import * as $ from "jquery";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public hospital = new Hospital()
  personnelEmailFlag = true;

  constructor(public title: Title, public router: Router) {
    this.title.setTitle("Register with us")
  }

  ngOnInit(): void {
  }

  get_details() {
    var pincode = this.hospital.pincode
    if (pincode == '') {
      this.hospital.state = ''
      this.hospital.district = ''
      alert("Please enter Pincode");
    }
    else {

      console.log(pincode);

      var xhReq = new XMLHttpRequest();
      xhReq.open("GET", "https://api.postalpincode.in/pincode/" + pincode, false);
      xhReq.send(null);
      var jsonObject = JSON.parse(xhReq.responseText);
      console.log(jsonObject);
      var b = JSON.parse(JSON.stringify(jsonObject));
      console.log(b);
      if (jsonObject[0].Status != 'Success') {
        $('#state').val('State');
        $('#district').val('District');
        alert("Pincode does not exist")
      }
      else {
        var city = jsonObject[0].PostOffice[0].District;
        var state = jsonObject[0].PostOffice[0].Circle;
        this.hospital.district = city;
        this.hospital.state = state;
      }
    }
  }

  registerHospital(){
    console.log(this.hospital)
  }


}

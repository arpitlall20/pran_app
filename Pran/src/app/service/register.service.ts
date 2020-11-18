import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hospital } from '../models/hospital/hospital';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(public http:HttpClient) { }

  public registerHospital(hospital:Hospital){
    
    this.http.post('http://localhost:170/register',hospital,  {responseType: 'text'}).subscribe(x=>console.log(x))
  }

  public getDetails(hospital:Hospital){
    var pincode = hospital.site.location.pincode
    var xhReq = new XMLHttpRequest();
      xhReq.open("GET", "https://api.postalpincode.in/pincode/" + pincode, false);
      xhReq.send(null);
      var jsonObject = JSON.parse(xhReq.responseText);
      var b = JSON.parse(JSON.stringify(jsonObject));
      if (jsonObject[0].Status != 'Success') {
        hospital.site.location.district = '';
        hospital.site.location.state = '';
      }
      else {
        var city = jsonObject[0].PostOffice[0].District;
        var state = jsonObject[0].PostOffice[0].Circle;
        hospital.site.location.district = city;
        hospital.site.location.state = state;
      }
    return hospital
  }
}

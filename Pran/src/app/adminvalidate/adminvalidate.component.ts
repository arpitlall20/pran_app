import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-adminvalidate',
  templateUrl: './adminvalidate.component.html',
  styleUrls: ['./adminvalidate.component.css']
})
export class AdminvalidateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

test(){
  alert("test")
  var reg= "hospitaldetails"
  window.open("http://localhost:4200/"+reg);
}
viewall(){
  alert("test");
}
}

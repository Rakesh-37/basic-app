import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit,OnDestroy {

  constructor() {
    console.log("constructor - registration")
   }

  ngOnInit(): void {
    console.log("ngonit - register")
  }
  ngOnDestroy(){
    console.log("ngondestroy - register")
  }
   
}

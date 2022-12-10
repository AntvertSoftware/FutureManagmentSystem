import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {
  formRegister!:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.registrationForm();
  }

  registrationForm(){
   this. formRegister = new FormGroup({
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      fathername: new FormControl("", [Validators.required]),
      mothername: new FormControl(""),
      gender: new FormControl(""),
      email: new FormControl(""),
      mobileno: new FormControl(""),
      dob: new FormControl(""),
      class: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      gip: new FormControl(""),
    });
  }

  get f()
  {
    return this.formRegister.controls;
  }

  get firstname() { return this.formRegister.get('firstname'); }

    
  
 


}

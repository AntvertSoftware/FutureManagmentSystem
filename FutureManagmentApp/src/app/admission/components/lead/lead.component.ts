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

    this.load();
    this.onSave();
  }

  load(){
   this. formRegister = new FormGroup({
      firstname: new FormControl("", [Validators.required]),
      lastname: new FormControl("", [Validators.required]),
      fathername: new FormControl("", [Validators.required]),
      mothername: new FormControl("",[Validators.required]),
      gender: new FormControl(""),
      email: new FormControl(""),
      mobileno: new FormControl("",[Validators.required]),
      dob: new FormControl(""),
      class: new FormControl(""),
      address: new FormControl(""),
      city: new FormControl(""),
      state: new FormControl(""),
      zip: new FormControl(""),
    });
  }


  onSave(){
    console.log(this.formRegister.value);
  }
  get f()
  {
    return this.formRegister.controls;
  }

  
}

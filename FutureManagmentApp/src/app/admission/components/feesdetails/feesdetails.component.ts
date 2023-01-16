import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feesdetails',
  templateUrl: './feesdetails.component.html',
  styleUrls: ['./feesdetails.component.css']
})
export class FeesdetailsComponent implements OnInit {
feesDetailsForm!:FormGroup;
  onSave: any;
  constructor() { }

  ngOnInit(): void {
    
    this.feesDetailsForms();
    this. load()
  }
  feesDetailsForms() {
    this.feesDetailsForm=new FormGroup({
      registrationNumber: new FormControl("",[Validators.required]),
      fullName: new FormControl( "",[Validators.required]),
      course: new FormControl(""),
      totalFess: new FormControl("",[Validators.required]),
      discount: new FormControl(""),
      paid: new FormControl(""),
      paidBy: new FormControl(""),
      remenew: new FormControl("")
    });
    

  }
  load()
  {
    console.log(this.feesDetailsForm.value);
  }
  
  get f()
  {
    return this.feesDetailsForm.controls;
  }

  
}



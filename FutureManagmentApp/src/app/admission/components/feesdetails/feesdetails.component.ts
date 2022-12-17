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
    this.onSave();
  }
  feesDetailsForms() {
    this.feesDetailsForm=new FormGroup({
      RegistrationNumber: new FormControl("",[Validators.required]),
      FullName: new FormControl([ "",Validators.required]),
      Course: new FormControl(["",Validators.required]),
      TotalFess: new FormControl(["",Validators.required]),
      Discount: new FormControl(["",Validators.required]),
      Paid: new FormControl(["",Validators.required]),
      PaidBy: new FormControl(["",Validators.required]),
      remenew: new FormControl(["",Validators.required])
    });
    this.onSave()
    {
      console.log(this.feesDetailsForm.value);
      return  this.feesDetailsForm.controls;
    }
  }
  
}



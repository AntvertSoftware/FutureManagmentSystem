import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent implements OnInit {
  admissionForm!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.admissionFormInit();
    this.onSave();
  }
  admissionFormInit(){
    this.admissionForm=new FormGroup({
      Mobile:new FormControl("",[Validators.required]),
      Email:new FormControl("",[Validators.required]),
      FirstName:new FormControl("",[Validators.required]),
      LastName:new FormControl("",[Validators.required]),
      FatherName:new FormControl(""),
      MotherName:new FormControl(""),
      Gender:new FormControl(""),
      DOB:new FormControl(""),
      Qualification:new FormControl(""),
      Adress:new FormControl("",[Validators.required]),
      City:new FormControl("",),
      State:new FormControl("",),
      Zip:new FormControl("")
    });
    
   
  }
  onSave(){
    console.log(this.admissionForm.value);
  }
  get AdmissionForms(){
    return this.admissionForm.controls;
  }

}

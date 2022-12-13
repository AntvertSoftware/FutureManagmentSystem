import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adimission-details',
  templateUrl: './adimission-details.component.html',
  styleUrls: ['./adimission-details.component.css']
})
export class AdimissionDetailsComponent implements OnInit {
formfeesdetails!:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

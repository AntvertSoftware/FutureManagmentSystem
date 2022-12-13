import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { LeadComponent } from './components/lead/lead.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';



@NgModule({
  declarations: [
    AdmissionComponent,
    LeadComponent,
    LeadDetailsComponent,
    AdimissionDetailsComponent,
    FeesdetailsComponent,
    
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AdmissionModule { }

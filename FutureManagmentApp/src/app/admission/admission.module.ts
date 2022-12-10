import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { LeadComponent } from './components/lead/lead.component';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';



@NgModule({
  declarations: [
    AdmissionComponent,
    LeadComponent,
    AdimissionDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    
  ]
})
export class AdmissionModule { }

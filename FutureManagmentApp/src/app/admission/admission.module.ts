import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { LeadComponent } from './components/lead/lead.component';
<<<<<<< HEAD
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';
>>>>>>> 2a26e3b61aabd1d745a6e7be3f59b35a859e1e15



@NgModule({
  declarations: [
    AdmissionComponent,
    LeadComponent,
<<<<<<< HEAD
    LeadDetailsComponent,
=======
    AdimissionDetailsComponent,
>>>>>>> 2a26e3b61aabd1d745a6e7be3f59b35a859e1e15
    
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class AdmissionModule { }

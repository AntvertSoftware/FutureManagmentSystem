import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';

import { LeadComponent } from './components/lead/lead.component';
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';

const routes: Routes = [{ path: "", component: AdmissionComponent },
{path:"lead-details", component:LeadDetailsComponent},
{ path: "lead", component: LeadComponent },
{path :"admission-details",component:AdimissionDetailsComponent},
{path:"fees",component:FeesdetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
<<<<<<< HEAD
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
=======
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';
>>>>>>> 2a26e3b61aabd1d745a6e7be3f59b35a859e1e15

import { LeadComponent } from './components/lead/lead.component';

const routes: Routes = [{ path: "admission", component: AdmissionComponent },
<<<<<<< HEAD
{ path: "", component: LeadComponent },
{path:"lead-details", component:LeadDetailsComponent}];
=======
{ path: "lead", component: LeadComponent },
{path :"admission-details",component:AdimissionDetailsComponent}];
>>>>>>> 2a26e3b61aabd1d745a6e7be3f59b35a859e1e15

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';

import { LeadComponent } from './components/lead/lead.component';

const routes: Routes = [{ path: "admission", component: AdmissionComponent },
{ path: "lead", component: LeadComponent },
{path :"admission-details",component:AdimissionDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

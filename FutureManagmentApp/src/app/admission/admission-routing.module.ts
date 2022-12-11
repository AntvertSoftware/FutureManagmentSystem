import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';

import { LeadComponent } from './components/lead/lead.component';

const routes: Routes = [{ path: "admission", component: AdmissionComponent },
{ path: "", component: LeadComponent },
{path:"lead-details", component:LeadDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';

import { LeadComponent } from './components/lead/lead.component';

const routes: Routes = [{ path: "", component: AdmissionComponent },
{ path: "lead", component: LeadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';

import { LeadComponent } from './components/lead/lead.component';

const routes: Routes = [{ path: "admission", component: AdmissionComponent },
{ path: "", component: LeadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

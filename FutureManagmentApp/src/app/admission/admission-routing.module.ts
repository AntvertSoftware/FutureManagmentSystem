import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';

import { LeadComponent } from './components/lead/lead.component';
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';

const routes: Routes = [{ path: "admission", component: AdmissionComponent },
{ path: "lead-details", component: LeadDetailsComponent },
{ path: "lead", component: LeadComponent },
{path: "", component: HomecomponentComponent},
{ path: "admission-details", component: AdimissionDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

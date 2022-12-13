import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { LeadDetailsComponent } from './components/lead-details/lead-details.component';
import { AdimissionDetailsComponent } from './components/adimission-details/adimission-details.component';

import { LeadComponent } from './components/lead/lead.component';
<<<<<<< HEAD
import { FeesdetailsComponent } from './components/feesdetails/feesdetails.component';
=======
import { HomecomponentComponent } from '../homecomponent/homecomponent.component';
>>>>>>> 3ad16916de396750f3296e87a580856b85bf13d1

const routes: Routes = [{ path: "admission", component: AdmissionComponent },
{ path: "lead-details", component: LeadDetailsComponent },
{ path: "lead", component: LeadComponent },
<<<<<<< HEAD
{path :"admission-details",component:AdimissionDetailsComponent},
{path:"fees",component:FeesdetailsComponent}];
=======
{path: "", component: HomecomponentComponent},
{ path: "admission-details", component: AdimissionDetailsComponent }];
>>>>>>> 3ad16916de396750f3296e87a580856b85bf13d1

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }

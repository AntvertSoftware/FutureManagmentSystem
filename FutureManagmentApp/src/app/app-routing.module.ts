import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';

const routes: Routes = [{path:"",component:HomecomponentComponent},
  { path: 'admission', loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

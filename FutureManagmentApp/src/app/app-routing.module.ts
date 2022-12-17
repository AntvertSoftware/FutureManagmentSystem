import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{ path: '', loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule) },
{ path: 'master', loadChildren: () => import('./master/master.module').then(m => m.MasterModule) }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

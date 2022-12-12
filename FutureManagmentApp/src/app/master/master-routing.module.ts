import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { StateComponent } from './components/state/state.component';
import { MasterComponent } from './master.component';

const routes: Routes = [{ path: '', component: MasterComponent },{
  path: "city", component:CityComponent
},{path:"state",component:StateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }

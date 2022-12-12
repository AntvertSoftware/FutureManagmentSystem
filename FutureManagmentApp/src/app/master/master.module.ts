import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';
import { CityComponent } from './components/city/city.component';
import { StateComponent } from './components/state/state.component';


@NgModule({
  declarations: [
    MasterComponent,
    CityComponent,
    StateComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartsellRoutingModule } from './startsell-routing.module';
import { DataComponent } from './data/data.component';




@NgModule({
  declarations: [
  
  

  
    DataComponent
  ],
  imports: [
    CommonModule,
    StartsellRoutingModule
  ]
})
export class StartsellModule { }

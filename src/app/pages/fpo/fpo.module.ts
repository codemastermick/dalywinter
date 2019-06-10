import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FpoRoutingModule } from './fpo-routing.module';
import { FpoComponent } from './fpo.component';

@NgModule({
  imports: [CommonModule, FpoRoutingModule],
  declarations: [FpoComponent]
})
export class FpoModule {}

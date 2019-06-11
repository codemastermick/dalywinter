import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrokersRoutingModule } from "./brokers-routing.module";
import { BrokersComponent } from "./brokers.component";

@NgModule({
  imports: [CommonModule, BrokersRoutingModule],
  declarations: [BrokersComponent]
})
export class BrokersModule {}

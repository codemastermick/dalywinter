import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UnionsRoutingModule } from "./unions-routing.module";
import { UnionsComponent } from "./unions.component";

@NgModule({
  imports: [CommonModule, UnionsRoutingModule],
  declarations: [UnionsComponent]
})
export class UnionsModule {}

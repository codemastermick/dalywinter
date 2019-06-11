import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NpoRoutingModule } from "./npo-routing.module";
import { NpoComponent } from "./npo.component";

@NgModule({
  imports: [CommonModule, NpoRoutingModule],
  declarations: [NpoComponent]
})
export class NpoModule {}

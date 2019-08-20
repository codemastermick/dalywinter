import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivacyRoutingModule } from "./privacy-routing.module";
import { PrivacyComponent } from "./privacy.component";
import { MaterialModule } from "../../shared/material.module";

@NgModule({
  imports: [CommonModule, PrivacyRoutingModule, MaterialModule],
  declarations: [PrivacyComponent]
})
export class PrivacyModule {}

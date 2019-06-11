import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PolciesRoutingModule } from "./external-policies-routing.module";
import { ExternalPoliciesComponent } from "./external-policies.component";
import { MaterialModule } from "../../material/material.module";

@NgModule({
  imports: [CommonModule, PolciesRoutingModule, MaterialModule],
  declarations: [ExternalPoliciesComponent]
})
export class PoliciesModule {}

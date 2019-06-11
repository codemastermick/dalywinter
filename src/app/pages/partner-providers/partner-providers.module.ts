import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PartnerProvidersRoutingModule } from "./partner-providers-routing.module";
import { PartnerProvidersComponent } from "./partner-providers.component";
import { MaterialModule } from "../../material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    PartnerProvidersRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [PartnerProvidersComponent]
})
export class PartnerProvidersModule {}

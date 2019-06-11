import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PartnerProvidersComponent } from "./partner-providers.component";

const routes: Routes = [{ path: "", component: PartnerProvidersComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PartnerProvidersRoutingModule {}

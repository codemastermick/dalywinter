import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NpoComponent } from "./npo.component";

const routes: Routes = [{ path: "", component: NpoComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class NpoRoutingModule {}

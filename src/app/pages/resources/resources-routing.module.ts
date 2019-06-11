import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResourcesComponent } from "./resources.component";

const routes: Routes = [{ path: "", component: ResourcesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class ResourcesRoutingModule {}

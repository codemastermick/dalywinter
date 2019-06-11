import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestimonialsComponent } from "./testimonials.component";

const routes: Routes = [{ path: "", component: TestimonialsComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class TestimonialsRoutingModule {}

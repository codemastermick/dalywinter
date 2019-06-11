import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialModule } from "../../material/material.module";
import { TestimonialsRoutingModule } from "./testimonials-routing.module";

import { TestimonialsComponent } from "./testimonials.component";

@NgModule({
  imports: [CommonModule, MaterialModule, TestimonialsRoutingModule],
  declarations: [TestimonialsComponent],
  providers: []
})
export class TestimonialsModule {}

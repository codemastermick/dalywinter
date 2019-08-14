import { Component, OnInit } from "@angular/core";
import { TestimonialsService } from "app/shared/testimonials.service";

export interface Testimonial {
  author: string;
  description: string;
  position: string;
  done: boolean;
}

export interface TestimonialWithID extends Testimonial {
  id: string;
}

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"]
})
export class TestimonialsComponent implements OnInit {
  testimonials: any;

  constructor(private testDB: TestimonialsService) { }

  ngOnInit() {
    this.testimonials = this.testDB.getTestimonials();
  }
}

import { Component, OnInit } from "@angular/core";
import { TestimonialsService } from "app/shared/testimonials.service";

interface Testimonials {
  author: string;
  description: string;
  done: boolean;
}

export interface Testimonial extends Testimonials {
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

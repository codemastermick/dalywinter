import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Testimonial } from "app/pages/testimonials/testimonials.component";

@Injectable({
  providedIn: "root"
})
export class TestimonialsService {
  collection: AngularFirestoreCollection<Testimonial>;
  testimonials: any;


  constructor(private db: AngularFirestore) {
    this.collection = this.db.collection("testimonials");
    this.testimonials = this.collection.valueChanges();
  }

  public getTestimonials() {
    return this.testimonials;
  }
}

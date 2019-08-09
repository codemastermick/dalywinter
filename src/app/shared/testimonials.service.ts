import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class TestimonialsService {

  constructor(private db: AngularFirestore) { }

  public getTestimonials() {
    return this.db.collection("testimonials").valueChanges();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Testimonial } from 'app/pages/testimonials/testimonials.component';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(private db: AngularFirestore) { }

  public getTestimonials() {
    return this.db.collection("testimonials").valueChanges();
  }
}

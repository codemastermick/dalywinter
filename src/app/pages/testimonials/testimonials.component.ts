import { map } from "rxjs/operators";
import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

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
  testimonialsCollection: AngularFirestoreCollection<Testimonials>;
  testimonials: any;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.testimonialsCollection = this.afs.collection("testimonials");
    this.testimonials = this.testimonialsCollection.valueChanges();
  }
}

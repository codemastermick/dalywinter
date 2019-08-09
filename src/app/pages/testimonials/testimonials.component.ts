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
    this.testimonials = this.testimonialsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Testimonial;
          const id = a.payload.doc.id;
          return { id, data };
        });
      })
    );
  }
}

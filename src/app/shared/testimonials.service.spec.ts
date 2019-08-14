import { TestBed } from "@angular/core/testing";

import { TestimonialsService } from "./testimonials.service";
import { Testimonial, TestimonialWithID } from "app/pages/testimonials/testimonials.component";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { BehaviorSubject, Observable, from } from "rxjs";

// const FirestoreStub = {
//   testimonials: {
//     collection: (name: string) => ({
//       doc: (id: "hn9324rh8f2") => ({
//         valueChanges: () => new BehaviorSubject<TestimonialWithID>({
//           id: "hn9324rh8f2",
//           author: "Demo Bob",
//           description: "Hello world",
//           position: "CEO of nothing",
//           done: false
//         }),
//         set: (data: any) => new Promise((resolve, reject) => resolve()),
//       }),
//     }),
//   }
// };

const input: TestimonialWithID[] = [
  {
    id: "hn9324rh8f2",
    author: "Demo Bob",
    description: "Hello world",
    position: "CEO of nothing",
    done: false
  }
];

const data = from(input);

const collectionStub = {
  valueChanges: jasmine.createSpy("valueChanges").and.returnValue(data)
};

const angularFirestoreStub = {
  collection: jasmine.createSpy("collection").and.returnValue(collectionStub)
};

describe("TestimonialsService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
  }));

  it("should be created", () => {
    const service: TestimonialsService = TestBed.get(TestimonialsService);
    expect(service).toBeTruthy();
  });
});

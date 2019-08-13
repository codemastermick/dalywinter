import { TestBed } from "@angular/core/testing";

import { TestimonialsService } from "./testimonials.service";
import { Testimonial } from "app/pages/testimonials/testimonials.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { BehaviorSubject } from "rxjs";

const FirestoreStub = {
  testimonials: {
    collection: (name: string) => ({
      doc: (id: "hn9324rh8f2") => ({
        valueChanges: () => new BehaviorSubject<Testimonial>({
          author: "Demo Bob",
          description: "Hello world",
          position: "CEO of nothing",
          done: false
        }),
        set: (data: any) => new Promise((resolve, reject) => resolve()),
      }),
    }),
  }
};

describe("TestimonialsService", () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: AngularFirestore, useValue: FirestoreStub }]
  }));

  it("should be created", () => {
    const service: TestimonialsService = TestBed.get(TestimonialsService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from "@angular/core/testing";

import { TestimonialsService } from "./testimonials.service";
import { TestimonialWithID } from "app/pages/testimonials/testimonials.component";
import { AngularFirestore } from "@angular/fire/firestore";
import { from } from "rxjs";


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

  it("should have a testimonial with the correct data", async () => {
    const service: TestimonialsService = TestBed.get(TestimonialsService);
    let t;
    const result = await service.getTestimonials().subscribe((testimonial: TestimonialWithID[]) => {
      t = JSON.stringify(testimonial);
    });
    expect(result).toBeTruthy();
    expect(t.id === "hn9324rh8f2");
    expect(t.author === "Demo Bob");
    expect(t.description === "Hello world");
    expect(t.position === "CEO of nothing");
  });
});

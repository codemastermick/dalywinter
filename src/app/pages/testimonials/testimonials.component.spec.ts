import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestimonialsComponent } from "./testimonials.component";
import { MaterialModule } from "app/material/material.module";
import { TestimonialsRoutingModule } from "./testimonials-routing.module";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "app/firebaseconfig";

describe("TestimonialsComponent", () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsComponent],
      imports: [
        MaterialModule,
        TestimonialsRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [AngularFirestore]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have testimonial collection", () => {
    expect(component.testimonialsCollection).not.toBeUndefined();
  });

  it("should have testimonial content", () => {
    expect(component.testimonials).not.toBeUndefined();
  });

  it("should return a testimonial", () => {
    expect(component.testimonials)
  });
});

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestimonialsComponent } from "./testimonials.component";
import { MaterialModule } from "src/app/material/material.module";
import { TestimonialsRoutingModule } from "./testimonials-routing.module";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "src/app/firebaseconfig";

describe("TestimonialsComponent", () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialsComponent],
      imports: [
        MaterialModule,
        TestimonialsRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig)
      ],
      providers: [AngularFirestore]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

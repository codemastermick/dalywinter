import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";
import { MaterialModule } from "src/app/material/material.module";
import { By } from "@angular/platform-browser";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "src/app/firebaseconfig";
import { AngularFireAuth } from "@angular/fire/auth";
import { RouterTestingModule } from "@angular/router/testing";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AngularFireModule.initializeApp(firebaseConfig),
        RouterTestingModule
      ],
      declarations: [HeaderComponent],
      providers: [AngularFirestore, AngularFireAuth]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

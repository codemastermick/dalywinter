import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NavigationModule } from "./navigation/navigation.module";
import { MaterialModule } from "./material/material.module";
import { ToastrModule } from "ngx-toastr";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "./firebaseconfig";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

let fixture;
let app;

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NavigationModule,
        MaterialModule,
        ToastrModule.forRoot({
          positionClass: "toast-bottom-full-width",
          preventDuplicates: true,
          timeOut: 10000,
          closeButton: true,
          extendedTimeOut: 5000
        }),
        AngularFireModule.initializeApp(firebaseConfig),
        BrowserAnimationsModule
      ],
      declarations: [AppComponent],
      providers: [AngularFirestore, AngularFireAuth]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Daly Winter & Associates LLP'`, () => {
    expect(app.title).toEqual("Daly Winter & Associates LLP");
  });

  it(`should have founding year`, () => {
    expect(app.foundingYear).not.toBeNull();
  });

  it(`should have author`, () => {
    expect(app.author).not.toBeNull();
  });

  it(`should display toast notification`, () => {
    const spy = spyOn(app, "showNotification");
    app.showNotification();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});

import { TestBed, async, inject } from "@angular/core/testing";

import { AuthGuard } from "./auth.guard";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "../firebaseconfig";
import { AngularFireAuth } from "@angular/fire/auth";
import { RouterTestingModule } from "@angular/router/testing";

describe("AuthGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        RouterTestingModule
      ],
      providers: [AuthGuard, AngularFirestore, AngularFireAuth]
    });
  });

  it("should ...", inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

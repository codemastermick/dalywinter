import { TestBed } from "@angular/core/testing";

import { AuthService } from "./auth.service";
import {
  AngularFirestore,
  AngularFirestoreModule
} from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { firebaseConfig } from "../firebaseconfig";
import { AngularFireAuth } from "@angular/fire/auth";
import { RouterTestingModule } from "@angular/router/testing";

describe("AuthService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        RouterTestingModule
      ],
      providers: [AngularFirestore, AngularFireAuth]
    })
  );

  it("should be created", () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

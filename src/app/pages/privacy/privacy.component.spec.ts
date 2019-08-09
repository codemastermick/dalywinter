import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PrivacyComponent } from "./privacy.component";
import { MaterialModule } from "app/material/material.module";
import { PrivacyRoutingModule } from "./privacy-routing.module";
import { RouterTestingModule } from "@angular/router/testing";

describe("PrivacyComponent", () => {
  let component: PrivacyComponent;
  let fixture: ComponentFixture<PrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyComponent],
      imports: [MaterialModule, PrivacyRoutingModule, RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

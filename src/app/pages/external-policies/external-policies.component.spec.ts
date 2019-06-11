import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExternalPoliciesComponent } from "./external-policies.component";
import { MaterialModule } from "src/app/material/material.module";
import { PolciesRoutingModule } from "./external-policies-routing.module";

describe("ExternalPoliciesComponent", () => {
  let component: ExternalPoliciesComponent;
  let fixture: ComponentFixture<ExternalPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExternalPoliciesComponent],
      imports: [MaterialModule, PolciesRoutingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

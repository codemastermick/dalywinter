import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExternalPoliciesComponent } from "./external-policies.component";

describe("ExternalPoliciesComponent", () => {
  let component: ExternalPoliciesComponent;
  let fixture: ComponentFixture<ExternalPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalPoliciesComponent ]
    })
    .compileComponents();
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

import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PartnerProvidersComponent } from "./partner-providers.component";
import { MaterialModule } from "src/app/material/material.module";
import { PartnerProvidersRoutingModule } from "./partner-providers-routing.module";

describe("PartnerProvidersComponent", () => {
  let component: PartnerProvidersComponent;
  let fixture: ComponentFixture<PartnerProvidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerProvidersComponent ],
      imports: [MaterialModule, PartnerProvidersRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

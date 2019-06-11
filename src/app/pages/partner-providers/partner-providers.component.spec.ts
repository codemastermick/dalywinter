import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PartnerProvidersComponent } from "./partner-providers.component";

describe("PartnerProvidersComponent", () => {
  let component: PartnerProvidersComponent;
  let fixture: ComponentFixture<PartnerProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

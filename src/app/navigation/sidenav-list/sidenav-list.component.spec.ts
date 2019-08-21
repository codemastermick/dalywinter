import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SidenavListComponent } from "./sidenav-list.component";
import { MaterialModule } from "app/shared/material.module";
import { MatSidenav } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("SidenavListComponent", () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;
  let sidenav: any;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavListComponent],
      imports: [MaterialModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    sidenav = TestBed.createComponent(MatSidenav);
    component.sidenav = sidenav;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should toggle sidenav", () => {
    spy = spyOn(component.sidenavClose, "emit");
    component.onSidenavClose();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  });
});

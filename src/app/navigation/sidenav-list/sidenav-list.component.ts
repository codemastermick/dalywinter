import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: "app-sidenav-list",
  templateUrl: "./sidenav-list.component.html",
  styleUrls: ["./sidenav-list.component.scss"]
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  @Input() sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
    this.sidenav.autoFocus = false;
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}

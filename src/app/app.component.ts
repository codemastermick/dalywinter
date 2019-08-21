import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ToastrService, ToastContainerDirective } from "ngx-toastr";

// declare ga as a function to set and sent the events
// tslint:disable-next-line: ban-types
declare let ga: Function;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Daly Winter & Associates LLP"; // replace this with your app"s title
  foundingYear = 2019; // replace with this year
  author = "Daly Winter & Associates LLP"; // your name or your company name
  @ViewChild(ToastContainerDirective, { read: false, static: false }) toastContainer: ToastContainerDirective;

  constructor(public router: Router, private toastr: ToastrService) {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga("set", "page", event.urlAfterRedirects);
        ga("send", "pageview");
      }
    });
  }

  ngOnInit(): void {
    setTimeout(() => this.showNotification());
  }

  showNotification() {
    this.toastr.overlayContainer = this.toastContainer;
    this.toastr.info(
      "This website uses cookies for statistical purposes." +
      "For more information view our <a href=\"privacy-policy\">privacy policy</a>." +
      "By using this site, you indicate that you agree with our privacy policy.",
      "Privacy Policy Notice",
      {
        enableHtml: true
      }
    );
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.getElementsByTagName("app-header")[0];
      element.classList.add("sticky-nav");
    } else {
      const element = document.getElementsByTagName("app-header")[0];
      element.classList.remove("sticky-nav");
    }
  }
}

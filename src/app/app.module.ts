import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./shared/material.module";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";
import { NavigationModule } from "./navigation/navigation.module";
import { ToastrModule } from "ngx-toastr";

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { firebaseConfig } from "./firebaseconfig";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TestimonialsService } from "./shared/testimonials.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    RouterModule,
    NavigationModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-full-width",
      preventDuplicates: true,
      timeOut: 10000,
      closeButton: true,
      extendedTimeOut: 5000
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FlexLayoutModule
  ],
  providers: [AngularFirestoreModule, TestimonialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

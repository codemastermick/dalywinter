import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { PathResolveService } from "./shared/path-resolve-service.guard";

import { paths } from "./app-paths";

const routes: Routes = [
  {
    path: paths.home,
    loadChildren: "../app/pages/home/home.module#HomeModule"
  },
  {
    path: paths.contact,
    loadChildren: "../app/pages/contact/contact.module#ContactModule"
  },
  {
    path: paths.resources,
    loadChildren: "../app/pages/resources/resources.module#ResourcesModule"
  },
  {
    path: paths.partners,
    loadChildren:
      "../app/pages/partner-providers/partner-providers.module#PartnerProvidersModule"
  },
  {
    path: paths.about,
    loadChildren: "../app/pages/about/about.module#AboutModule"
  },
  {
    path: paths.testimonials,
    loadChildren:
      "../app/pages/testimonials/testimonials.module#TestimonialsModule"
  },
  {
    path: paths.fpo,
    loadChildren: "../app/pages/fpo/fpo.module#FpoModule"
  },
  {
    path: paths.npo,
    loadChildren: "../app/pages/npo/npo.module#NpoModule"
  },
  {
    path: paths.union,
    loadChildren: "../app/pages/unions/unions.module#UnionsModule"
  },
  {
    path: paths.broker,
    loadChildren: "../app/pages/brokers/brokers.module#BrokersModule"
  },
  {
    path: paths.privacy,
    loadChildren: "../app/pages/privacy/privacy.module#PrivacyModule"
  },
  {
    path: paths.policies,
    loadChildren:
      "../app/pages/external-policies/external-policies.module#PoliciesModule"
  },
  {
    path: "404",
    loadChildren:
      "../app/pages/errors/not-found/not-found.module#NotFoundModule"
  },
  { path: "", redirectTo: "/home", pathMatch: "full" }, // Fallback to home if no route is found
  {
    path: "**",
    resolve: { path: PathResolveService },
    loadChildren:
      "../app/pages/errors/not-found/not-found.module#NotFoundModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

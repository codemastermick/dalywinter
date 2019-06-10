import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalPoliciesComponent } from './external-policies.component';

const routes: Routes = [{ path: '', component: ExternalPoliciesComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PolciesRoutingModule {}

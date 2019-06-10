import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FpoComponent } from './fpo.component';

const routes: Routes = [{ path: '', component: FpoComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class FpoRoutingModule {}

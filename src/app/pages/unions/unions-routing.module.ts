import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnionsComponent } from './unions.component';

const routes: Routes = [{ path: '', component: UnionsComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class UnionsRoutingModule {}

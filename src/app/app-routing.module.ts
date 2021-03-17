import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { OpenlmViewComponent } from './first/openlm-view/openlm-view.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  {
    path: 'openlm-view/:title/:author/:price',
    component: OpenlmViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

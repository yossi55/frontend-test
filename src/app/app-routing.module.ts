import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferingsComponent } from '@components/offerings/offerings.component';

const routes: Routes = [
  { path: '', component: OfferingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

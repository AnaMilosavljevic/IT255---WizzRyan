import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './offer/offer.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'offer', component: OfferComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

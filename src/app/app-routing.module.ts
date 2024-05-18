import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfferComponent } from './offer/offer.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AboutComponent } from './about/about.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { DIComponent } from './di/di.component';

//Dodate su rute za DZ11 i povezane sa komponentama.
const routes: Routes = [
  { path: 'offer', component: OfferComponent },
  { path: 'recommendation', component: RecommendationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'flight-list', component: FlightListComponent },
  { path: 'di', component: DIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }

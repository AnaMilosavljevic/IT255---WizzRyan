import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfferComponent } from './offer/offer.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    NavbarComponent,
    OfferComponent,
    RecommendationComponent,
    AboutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

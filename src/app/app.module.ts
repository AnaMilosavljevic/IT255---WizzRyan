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
import { PageService } from './PageService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DIComponent } from './di/di.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    NavbarComponent,
    OfferComponent,
    RecommendationComponent,
    AboutComponent,
    HomeComponent,
    DIComponent,
    FlightListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [PageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

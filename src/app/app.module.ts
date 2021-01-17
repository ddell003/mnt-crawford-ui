import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavagationComponent } from './navagation/navagation.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { WaterComponent } from './services/water/water.component';
import { BidsComponent } from './bids/bids.component';
import { EmergencyComponent } from './services/emergency/emergency.component';

@NgModule({
  declarations: [
    AppComponent,
    NavagationComponent,
    FooterComponent,
    LandingComponent,
    WaterComponent,
    BidsComponent,
    EmergencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

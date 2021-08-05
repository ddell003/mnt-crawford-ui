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
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FacilitiesComponent } from './services/facilities/facilities.component';
import { TrashComponent } from './services/trash/trash.component';
import { BuildingComponent } from './references/building/building.component';
import { LicensesComponent } from './references/licenses/licenses.component';
import { OrdinancesComponent } from './references/ordinances/ordinances.component';
import { MapsComponent } from './references/maps/maps.component';
import { PropertyTaxComponent } from './references/property-tax/property-tax.component';
import { RealEstateTaxComponent } from './references/real-estate-tax/real-estate-tax.component';
import { BoardComponent } from './directory/board/board.component';
import { CouncilComponent } from './directory/council/council.component';
import { AdministrationComponent } from './directory/administration/administration.component';
import { HearingsComponent } from './hearings/hearings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavagationComponent,
    FooterComponent,
    LandingComponent,
    WaterComponent,
    BidsComponent,
    EmergencyComponent,
    AnnouncementsComponent,
    FacilitiesComponent,
    TrashComponent,
    BuildingComponent,
    LicensesComponent,
    OrdinancesComponent,
    MapsComponent,
    PropertyTaxComponent,
    RealEstateTaxComponent,
    BoardComponent,
    CouncilComponent,
    AdministrationComponent,
    HearingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

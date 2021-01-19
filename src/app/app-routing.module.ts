import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { BidsComponent } from './bids/bids.component';
import { AdministrationComponent } from './directory/administration/administration.component';
import { BoardComponent } from './directory/board/board.component';
import { CouncilComponent } from './directory/council/council.component';
import { LandingComponent } from './landing/landing.component';
import { BuildingComponent } from './references/building/building.component';
import { LicensesComponent } from './references/licenses/licenses.component';
import { MapsComponent } from './references/maps/maps.component';
import { OrdinancesComponent } from './references/ordinances/ordinances.component';
import { PropertyTaxComponent } from './references/property-tax/property-tax.component';
import { RealEstateTaxComponent } from './references/real-estate-tax/real-estate-tax.component';
import { EmergencyComponent } from './services/emergency/emergency.component';
import { FacilitiesComponent } from './services/facilities/facilities.component';
import { TrashComponent } from './services/trash/trash.component';
import { WaterComponent } from './services/water/water.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'services/water', component: WaterComponent},
  { path: 'services/emergency', component: EmergencyComponent},
  { path: 'services/facilities', component: FacilitiesComponent},
  { path: 'services/trash', component: TrashComponent},
  { path: 'bids', component: BidsComponent},
  { path: 'announcements', component: AnnouncementsComponent},

  { path: 'references/building', component: BuildingComponent},
  { path: 'references/licenses', component: LicensesComponent},
  { path: 'references/ordinances', component: OrdinancesComponent},
  { path: 'references/maps', component: MapsComponent},
  { path: 'references/property_tax', component: PropertyTaxComponent},
  { path: 'references/real_estate_tax', component: RealEstateTaxComponent},

  { path: 'directory/board', component: BoardComponent},
  { path: 'directory/council', component: CouncilComponent},
  { path: 'directory/administration', component: AdministrationComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

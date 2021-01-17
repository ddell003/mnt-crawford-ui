import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidsComponent } from './bids/bids.component';
import { LandingComponent } from './landing/landing.component';
import { EmergencyComponent } from './services/emergency/emergency.component';
import { WaterComponent } from './services/water/water.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'services/water', component: WaterComponent},
  { path: 'services/emergency', component: EmergencyComponent},
  { path: 'bids', component: BidsComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

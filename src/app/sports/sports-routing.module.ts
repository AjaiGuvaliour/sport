import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageSportComponent } from './manage-sport/manage-sport.component';
import { SelectedSportComponent } from './selected-sport/selected-sport.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'manageSport',
    pathMatch:'full'
  },
  {
    path:'manageSport',
    component:ManageSportComponent
  },
  {
    path:'selectedSport',
    component:SelectedSportComponent
  },
  {
    path:'booking',
    component:BookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportsRoutingModule { }

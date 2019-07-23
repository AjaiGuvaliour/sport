import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { BookingsComponent } from './bookings/bookings.component';
import { ManageSportComponent } from './manage-sport/manage-sport.component';
import { SelectedSportComponent } from './selected-sport/selected-sport.component';

@NgModule({
  declarations: [
    BookingsComponent,
    ManageSportComponent,
    SelectedSportComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }

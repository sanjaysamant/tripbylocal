import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutes } from './admin.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ContinentsComponent } from './../../continents/continents.component';
import { CountriesComponent } from './../../countries/countries.component';
import { CitiesComponent } from './../../cities/cities.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

import { CreateContinentComponent } from './../../continents/create-continent/create-continent.component';
import { CreateCountryComponent } from './../../countries/create-country/create-country.component';
import { CreateCityComponent } from './../../cities/create-city/create-city.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ContinentsComponent,
    CreateContinentComponent,
    CountriesComponent,
    CreateCountryComponent,
    CitiesComponent,
    CreateCityComponent,
  ]
})

export class AdminModule {}

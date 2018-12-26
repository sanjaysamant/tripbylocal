import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ContinentsComponent } from './../../continents/continents.component';
import { CreateContinentComponent } from './../../continents/create-continent/create-continent.component';
import { CountriesComponent } from './../../countries/countries.component';
import { CreateCountryComponent } from './../../countries/create-country/create-country.component';
import { CitiesComponent } from './../../cities/cities.component';
import { CreateCityComponent } from './../../cities/create-city/create-city.component';

export const AdminRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',            component: DashboardComponent },
    { path: 'continent',            component: ContinentsComponent },
    { path: 'continent/create',     component: CreateContinentComponent },
    { path: 'country',              component: CountriesComponent },
    { path: 'country/create',       component: CreateCountryComponent },
    { path: 'city',                 component: CitiesComponent },
    { path: 'city/create',          component: CreateCityComponent },
    // { path: 'user-profile',         component: UserProfileComponent },
    // { path: 'table-list',           component: TableListComponent },
    // { path: 'typography',           component: TypographyComponent },
    // { path: 'icons',                component: IconsComponent },
    // { path: 'maps',                 component: MapsComponent },
    // { path: 'notifications',        component: NotificationsComponent },
    // { path: 'upgrade',              component: UpgradeComponent },
];

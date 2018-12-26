import { Routes } from '@angular/router';

import { ContinentsComponent } from './continents.component';
import { CreateContinentComponent } from './create-continent/create-continent.component';

export const AdminRoutes: Routes = [
    // {
    //     path: 'continent',
    //     component: CountriesComponent
    // },
    {
        path: '',
        component: ContinentsComponent
    },
    {
        path: 'create',
        component: CreateContinentComponent
    }
];

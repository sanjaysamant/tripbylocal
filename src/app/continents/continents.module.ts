import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ComponentsModule} from './../components/components.module';
// import {ContinentsComponent} from './continents.component';
// import { CreateContinentComponent } from './create-continent/create-continent.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  declarations: [
    // ContinentsComponent,
    // CreateContinentComponent,
  ]
})
export class ContinentsModule { }

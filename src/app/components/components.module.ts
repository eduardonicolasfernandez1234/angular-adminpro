import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment/increment.component';
import { DonuthComponent } from './donuth/donuth.component';

@NgModule({
  declarations: [
    IncrementComponent,
    DonuthComponent
  ],
  exports: [
    IncrementComponent,
    DonuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ]
})
export class ComponentsModule { }

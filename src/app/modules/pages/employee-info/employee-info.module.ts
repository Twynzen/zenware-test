import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { RouterModule } from '@angular/router';

import { EmployeeInfoComponent } from './employee-info.component';
import { EmployeeInfoRoutingModule } from './employee-info.routing.module';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
 declarations: [
    EmployeeInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeInfoRoutingModule,
  ],
  exports:[
    EmployeeInfoComponent
  ]


})
export class EmployeeInfoModule { }

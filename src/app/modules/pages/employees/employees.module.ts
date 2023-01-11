import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
 declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeesRoutingModule,

  ],
  exports:[
    EmployeesComponent
  ]


})
export class EmployeesModule { }

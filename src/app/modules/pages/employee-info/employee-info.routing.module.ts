import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeInfoComponent } from './employee-info.component';

const routes: Routes = [{ path: '', component: EmployeeInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CommonModule],
  exports: [RouterModule]
})
export class EmployeeInfoRoutingModule { }

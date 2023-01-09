import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employee-info', loadChildren: () => import('src/app/modules/pages/employee-info/employee-info.module')
  .then(m => m.EmployeeInfoModule) },
  {
    path: 'employees', loadChildren: () => import('src/app/modules/pages/employees/employees.module')
      .then(m => m.EmployeesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

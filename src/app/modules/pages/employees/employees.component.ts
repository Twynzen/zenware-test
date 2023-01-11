import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OLDMAN, YOUNGMAN } from '../../shared/constants/images-employees.constants';
import { Employee } from '../../shared/interfaces/employee.interface';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
  employees: Employee[] = {} as Employee[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ){

  }

  ngOnInit(): void {
    this.calculeAge();
    console.log(this.employees,"em");

  }

  calculeAge(): void {
    this.employees = this.employeeService.employees;
    this.employees.forEach(employee => {
      if (employee.employee_age < 30) {
        employee.profile_image = YOUNGMAN;
      } else {
        employee.profile_image = OLDMAN;
      }
    });
  }
  viewEmployee(employee: Employee) {
    this.router.navigate(['employee-info']);
    this.employeeService.setSelectedEmployee(employee);
  }


}

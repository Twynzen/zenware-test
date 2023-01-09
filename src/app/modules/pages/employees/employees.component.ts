import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit{
  constructor(
    private getEmployee: EmployeeService
  ){

  }

  ngOnInit(): void {
      this.getEmployee.getEmployees();
  }
}

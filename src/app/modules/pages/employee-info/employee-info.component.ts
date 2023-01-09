import { OnInit, Component } from '@angular/core';
import { Employee } from '../../shared/interfaces/employee.interface';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {

  oldManImg: string = 'https://images.unsplash.com/photo-1552641156-93ea2a5f78e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by.';
  youngManImg: string = 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG9.'
  employee: Employee = {} as Employee;
  constructor(
    private getEmployee: EmployeeService
    ){
  }

  ngOnInit(): void {
    if (this.getEmployee.employee) {
      this.employee = this.getEmployee.employee;
    }
  }
}

import { Injectable } from '@angular/core';
import { GET_EMPLOYEE, GET_EMPLOYEES } from '../constants/endpoints.constants';
import { Employee } from '../interfaces/employee.interface';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    //Data quemada por problemas en la API
  employees: Employee[] =
    [{
      "id": 1,
      "employee_name": "Tiger Nixon",
      "employee_salary": 320800,
      "employee_age": 61,
      "profile_image": ""
    },
    {
      "id": 2,
      "employee_name": "Garrett Winters",
      "employee_salary": 170750,
      "employee_age": 63,
      "profile_image": ""
    },
    {
      "id": 3,
      "employee_name": "Ashton Cox",
      "employee_salary": 86000,
      "employee_age": 66,
      "profile_image": ""
    },
    {
      "id": 4,
      "employee_name": "Cedric Kelly",
      "employee_salary": 433060,
      "employee_age": 22,
      "profile_image": ""
    },
    {
      "id": 5,
      "employee_name": "Airi Satou",
      "employee_salary": 162700,
      "employee_age": 33,
      "profile_image": ""
    },
    {
      "id": 6,
      "employee_name": "Brielle Williamson",
      "employee_salary": 372000,
      "employee_age": 61,
      "profile_image": ""
    }] as Employee[];
  selectedEmployee: Employee = {} as Employee;
  employee: Employee = {} as Employee;


  constructor(
    private requestService: RequestService
  ) { }
  async getEmployees() {
    this.requestService.get(GET_EMPLOYEES).subscribe(
      (res: any) => {
        try {
          console.log(res, "respu");
          this.employees = res.data

        } catch (error) {
          console.error(error);

        }
      }
    )
  }
  async getTheEmployee(id:number) {
    this.requestService.get(GET_EMPLOYEE+id).subscribe(
      (res: any) => {
        try {
          console.log(res, "respu");
          this.employee = res.data


        } catch (error) {
          console.error(error);

        }
      }
    )
  }
  setSelectedEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }
  getSelectedEmployee(): Employee {
    return this.selectedEmployee;
  }
  updateEmployee(id: number, employee: Employee) {
    const employeeIndex = this.employees.findIndex(e => e.id === id);
    if (employeeIndex !== -1) {
      this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...employee };
      this.setSelectedEmployee(this.employees[employeeIndex]);
    }


  }
}

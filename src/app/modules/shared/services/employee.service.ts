import { Injectable } from '@angular/core';
import { GET_EMPLOYEE, GET_EMPLOYEES } from '../constants/endpoints.constants';
import { Employee } from '../interfaces/employee.interface';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees: Employee[] = {} as Employee[];
  employee?: Employee;


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
}

import { OnInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OLDMAN, YOUNGMAN } from '../../shared/constants/images-employees.constants';
import { Employee } from '../../shared/interfaces/employee.interface';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  employeeForm!: FormGroup;
  isEditing = false;
  employee: Employee = {
    //Data quemada por problemas en la API
    id: 1,
    employee_name: "Tiger Nixon",
    employee_salary: 320800,
    employee_age: 41,
    profile_image: OLDMAN

  } as Employee;
  constructor(
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder
    ){
  }

  ngOnInit(): void {
    this.resetEmployee();
    this.buildForm();
  }
  resetEmployee(){
    if (Object.keys(this.employeeService.getSelectedEmployee()).length !== 0 ) {
      this.employee = this.employeeService.getSelectedEmployee();
      this.calculeAge(this.employee);
    }
  }
  calculeAge(employee: Employee): void {
      if (employee.employee_age < 30) {
        employee.profile_image = YOUNGMAN;
      } else {
        employee.profile_image = OLDMAN;
      }
  }
  buildForm(): void {
    this.employeeForm = this.formBuilder.group({
      employee_name: [this.employee.employee_name],
      employee_age: [this.employee.employee_age],
      employee_salary: [this.employee.employee_salary],

    });
  }
  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }
  saveChanges(): void {
    this.employeeService.updateEmployee(this.employee.id, this.employeeForm.value);
    this.isEditing = false;
    this.resetEmployee();
  }


}

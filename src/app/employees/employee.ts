import {EmployeeBasicInfo} from './employee-basic-info';
import {Gender} from './gender.enum';
import {DepartmentManager} from '../shared/models/department-manager';
import {DepartmentEmployee} from '../shared/models/department-employee';
import {Title} from '../shared/models/title';
import {Salary} from '../shared/models/salary';

export class Employee extends EmployeeBasicInfo {
  birthDate: Date;
  gender: Gender;
  hireDate: Date;
  managerOf: DepartmentManager[];
  employeeOf: DepartmentEmployee[];
  titles: Title[];
  salaries: Salary[];
}

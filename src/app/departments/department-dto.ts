import {Department} from './department';
import {DepartmentEmployee} from '../shared/models/department-employee';

export class DepartmentDTO {
  department: Department;
  employees: DepartmentEmployee[];
}

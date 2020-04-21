import {Department} from './department';
import {SerializedEmployee} from '../shared/models/serialized-employee';

export class DepartmentDTO {
  department: Department;
  employees: SerializedEmployee[];
}

/**
 * Department is a data-structure that holds an individual
 * department
 */
import {DepartmentBasicInfo} from './department-basic-info';
import {SerializedEmployee} from '../shared/models/serialized-employee';

export class Department extends DepartmentBasicInfo {
  managers: SerializedEmployee[];
}

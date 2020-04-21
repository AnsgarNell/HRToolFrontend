/**
 * Department is a data-structure that holds an individual
 * department
 */
import {DepartmentBasicInfo} from './department-basic-info';
import {DepartmentManager} from '../shared/models/department-manager';

export class Department extends DepartmentBasicInfo {
  managers: DepartmentManager[];
}

/**
 * Departments is a data-structure that holds an individual
 * department
 */

export class Departments {
  deptNo: string;
  deptName: string;

  constructor(obj?: any) {
    this.deptNo = obj && obj.deptNo || null;
    this.deptName = obj && obj.deptName || null;
  }
}

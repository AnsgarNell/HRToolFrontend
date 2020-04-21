/**
 * DepartmentBasicInfo is a data-structure that holds the basic information for
 * an individual department
 */

export class DepartmentBasicInfo {
  deptNo: string;
  deptName: string;

  constructor(obj?: any) {
    this.deptNo = obj && obj.deptNo || null;
    this.deptName = obj && obj.deptName || null;
  }
}

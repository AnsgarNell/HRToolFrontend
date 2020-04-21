/**
 * EmployeeBasicInfo is a data-structure that holds the basic information for
 * an individual employee
 */

export class EmployeeBasicInfo {
  empNo: number;
  firstName: string;
  lastName: string;

  constructor(obj?: any) {
    this.empNo = obj && obj.empNo || null;
    this.firstName = obj && obj.firstName || null;
    this.lastName = obj && obj.lastName || null;
  }
}

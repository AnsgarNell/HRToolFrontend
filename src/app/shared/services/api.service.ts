import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from '../../departments/department';
import {Observable} from 'rxjs';

import * as config from '../../../assets/config/api.config.json';
import {DepartmentDTO} from '../../departments/department-dto';
import {EmployeeBasicInfo} from '../../employees/employee-basic-info';

const baseUrl = config.ApiUrl;
const departmentsURI = baseUrl + 'departments/';
const employeesURI = baseUrl + 'employees/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(departmentsURI);
  }

  getDepartmentById(deptNo: string, start: number, limit: number): Observable<DepartmentDTO> {
  return this.http.get<DepartmentDTO>(departmentsURI + deptNo + '?_start=${start}&_limit=${limit}`');
  }

  getEmployees(start: number, limit: number): Observable<EmployeeBasicInfo[]> {
    return this.http.get<EmployeeBasicInfo[]>(employeesURI + '?_start=${start}&_limit=${limit}`');
  }
}

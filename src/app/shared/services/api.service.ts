import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from '../../departments/department';
import {Observable} from 'rxjs';

import * as config from '../../../assets/config/api.config.json';
import {DepartmentDTO} from '../../departments/department-dto';

const baseUrl = config.ApiUrl;
const departmentsURI = baseUrl + 'departments/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(departmentsURI);
  }

  getDepartmentById(deptNo: string): Observable<DepartmentDTO> {
  return this.http.get<DepartmentDTO>(departmentsURI + deptNo);
}
}

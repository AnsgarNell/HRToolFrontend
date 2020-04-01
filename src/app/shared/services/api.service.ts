import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Departments} from '../../departments/departments-model';
import {Observable} from 'rxjs';

import * as config from '../../../assets/config/api.config.json';

const baseUrl = config.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Departments[]> {
    return this.http.get<Departments[]>(baseUrl + 'departments');
  }
}

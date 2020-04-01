import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Department} from '../../departments/department-model';
import {Observable} from 'rxjs';

import * as config from '../../../assets/config/api.config.json';

const baseUrl = config.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(baseUrl + 'departments');
  }
}

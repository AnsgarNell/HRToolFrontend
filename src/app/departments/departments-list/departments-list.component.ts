import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {finalize} from 'rxjs/operators';
import {MessageService} from '../../shared/services/message.service';
import {DepartmentBasicInfo} from '../department-basic-info';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  departments: DepartmentBasicInfo[];
  loading: boolean;

  constructor(apiServicesService: ApiService,
              private messageService: MessageService) {
    this.loading = true;
    apiServicesService.getDepartments()
      .pipe(
        finalize(() => this.loading = false),
      ).subscribe(
      departments => {
        this.departments = departments;
      },
      error => {
        this.messageService.add(`${error.name}: "${error.message}"`);
      }
    );
  }

  ngOnInit(): void {
  }

}

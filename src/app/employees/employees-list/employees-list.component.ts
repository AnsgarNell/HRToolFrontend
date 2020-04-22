import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {MessageService} from '../../shared/services/message.service';
import {finalize} from 'rxjs/operators';
import {EmployeeBasicInfo} from '../employee-basic-info';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  employees: EmployeeBasicInfo[];
  loading: boolean;

  constructor(private route: ActivatedRoute,
              apiServicesService: ApiService,
              private messageService: MessageService) {
    this.loading = true;
    const start = +this.route.snapshot.paramMap.get('start');
    const limit = +this.route.snapshot.paramMap.get('limit');
    apiServicesService.getEmployees(start, limit)
      .pipe(
        finalize(() => this.loading = false),
      ).subscribe(
      employees => {
        this.employees = employees;
      },
      error => {
        this.messageService.add(`${error.name}: "${error.message}"`);
      }
    );
  }

  ngOnInit(): void {
  }

}

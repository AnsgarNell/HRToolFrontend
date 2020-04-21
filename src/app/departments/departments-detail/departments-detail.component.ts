import { Component, OnInit } from '@angular/core';
import {DepartmentBasicInfo} from '../department-basic-info';
import {DepartmentDTO} from '../department-dto';
import {ApiService} from '../../shared/services/api.service';
import {MessageService} from '../../shared/services/message.service';
import {finalize} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-departments-detail',
  templateUrl: './departments-detail.component.html',
  styleUrls: ['./departments-detail.component.css']
})
export class DepartmentsDetailComponent implements OnInit {
  departmentDTO: DepartmentDTO;
  loading: boolean;

  constructor(private route: ActivatedRoute,
              apiServicesService: ApiService,
              private messageService: MessageService) {
    this.loading = true;
    const deptNo: string = this.route.snapshot.paramMap.get('deptNo');
    apiServicesService.getDepartmentById(deptNo)
      .pipe(
        finalize(() => this.loading = false),
      ).subscribe(
      departmentDTO => {
        this.departmentDTO = departmentDTO;
      },
      error => {
        this.messageService.add(`${error.name}: "${error.message}"`);
      }
    );
  }

  ngOnInit(): void {
  }

}

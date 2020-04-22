import {Component, Input, OnInit} from '@angular/core';
import {MessageService} from '../../shared/services/message.service';
import {EmployeeBasicInfo} from '../employee-basic-info';

@Component({
  selector: 'app-employees-list-table',
  templateUrl: './employees-list-table.component.html',
  styleUrls: ['./employees-list-table.component.css']
})
export class EmployeesListTableComponent implements OnInit {
  @Input() employees: EmployeeBasicInfo[];

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

}

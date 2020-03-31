import {Component, Input, OnInit} from '@angular/core';
import {Departments} from '../departments-model';

@Component({
  selector: '[app-departments-list-detail]',
  templateUrl: './departments-list-detail.component.html',
  styleUrls: ['./departments-list-detail.component.css']
})
export class DepartmentsListDetailComponent implements OnInit {
  @Input() department: Departments;

  constructor() { }

  ngOnInit(): void {
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListTableComponent } from './employees-list-table.component';

describe('EmployeesListTableComponent', () => {
  let component: EmployeesListTableComponent;
  let fixture: ComponentFixture<EmployeesListTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesListTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

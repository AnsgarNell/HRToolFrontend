import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepartmentsListComponent} from './departments/departments-list/departments-list.component';
import {DepartmentsDetailComponent} from './departments/departments-detail/departments-detail.component';
import {EmployeesListComponent} from './employees/employees-list/employees-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsListComponent },
  { path: 'departments/:deptNo', component: DepartmentsDetailComponent },
  { path: 'employees', redirectTo: 'employees/start/1/limit/10' },
  { path: 'employees/start/:start/limit/:limit', component: EmployeesListComponent },
  { path: '**', redirectTo: 'departments' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsListDetailComponent } from './departments-list-detail.component';

describe('DepartmentsListDetailComponent', () => {
  let component: DepartmentsListDetailComponent;
  let fixture: ComponentFixture<DepartmentsListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

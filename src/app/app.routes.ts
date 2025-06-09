import { Routes } from '@angular/router';
import { EmployeeMasterComponent } from './employee-master/employee-master.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeecontectComponent } from './employeecontect/employeecontect.component';

export const routes: Routes = [
    {
        path:"emp-add",
        component:EmployeeMasterComponent
    },
    {
        path:"emp-op",
        component:EmployeeListComponent
    },
    {
        path:"emp-con",
        component:EmployeecontectComponent
    }
];

import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { EmployeeList } from './employee-list/employee-list';
import { AddEmployee } from './add-employee/add-employee';
import { EmployeeDetails } from './employee-details/employee-details';
import { UpdateEmployee } from './update-employee/update-employee';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: Login },
    { path: 'signup', component: Signup },
    
    { path: 'employees', component: EmployeeList },
    { path: 'employees/add', component: AddEmployee },
    { path: 'employees/:id', component: EmployeeDetails },
    { path: 'employees/edit/:id', component: UpdateEmployee },
];

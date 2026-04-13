import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../auth';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit { 
  employees: Employee[] = [];

  filteredEmployees: Employee[] = [];

  searchDepartment: string = '';
  searchPosition: string = '';

  constructor(
    private router: Router, 
    private authService: Auth,
    private employeeService: EmployeeService
  ) {}

  async ngOnInit() {
    await this.loadEmployees();
  }

  async loadEmployees() {
    try {
      this.employees = await this.employeeService.getEmployees();
      this.filteredEmployees = [...this.employees];
    } catch (error) {
      console.error('Error loading employees:', error);
    }
  }

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }

  deleteEmployee(id: string) {
    this.employees = this.employees.filter(emp => emp.id !== id);
    this.filteredEmployees = this.filteredEmployees.filter(emp => emp.id !== id);
  }

  searchEmployees() {
    this.filteredEmployees = this.employees.filter(employee => {
      const matchDepartment = 
        this.searchDepartment === '' ||
        employee.department.toLowerCase().includes(this.searchDepartment.toLowerCase());

      const matchPosition = 
        this.searchPosition === '' ||
        employee.position.toLowerCase().includes(this.searchPosition.toLowerCase());

        return matchDepartment && matchPosition;
    });
  }

  resetSearch() {
    this.searchDepartment = '';
    this.searchPosition = '';
    this.filteredEmployees = [...this.employees];
  }
}

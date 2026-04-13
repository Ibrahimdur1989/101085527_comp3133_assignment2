import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css',
})
export class AddEmployee {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  department: string = '';
  position: string = '';
  salary: number = 0;
  profilePicture: string = '';

  constructor(private router: Router) {}

  onAddEmployee() {
    if (
      this.firstName &&
      this.lastName &&
      this.email &&
      this.department &&
      this.position &&
      this.salary &&
      this.profilePicture
    ) {
      alert('Employee added successfully');
      this.router.navigate(['/employees'])
    }
  }
}

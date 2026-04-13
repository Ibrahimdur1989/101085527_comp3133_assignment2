import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css',
})
export class UpdateEmployee {
  employeeId: string | null = '';
  firstName: string = 'Ahmed';
  lastName: string = 'Awdah';
  email: string = 'Ahmed@gmail.com';
  department: string = 'IT';
  position: string = 'Developer';
  salary: number = 5000;
  profilePicture: string = 'https://via.placeholder.com/80';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }

  onUpdateEmployee() {
    alert('Employee update successfully');
    this.router.navigate(['/employees']);
  }
}

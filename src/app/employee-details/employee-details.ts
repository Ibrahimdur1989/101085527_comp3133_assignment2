import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {
  employeeId: string | null = '';

  constructor(private route: ActivatedRoute) {
    this.employeeId = this.route.snapshot.paramMap.get('id');
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList { 
  constructor(private router: Router, private authService: Auth) {}

  logout() {
    this.authService.clearToken();
    this.router.navigate(['/login']);
  }

  checkSession() {
    if (this.authService.isLoggedIn()) {
      alert('User is authenticated');
    } else {
      alert('No active session');
    }
  }
}

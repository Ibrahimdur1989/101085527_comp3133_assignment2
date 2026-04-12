import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { Auth } from '../auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule , FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login { 
  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: Auth) {}

  onLogin() {
    if (this.email && this.password) {
      const fakeToken = 'student-login-token';
      this.authService.setToken(fakeToken);

      alert('Login successful');
      this.router.navigate(['/employees']);
    }
  }
}

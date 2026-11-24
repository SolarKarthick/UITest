import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FluidModule } from 'primeng/fluid';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RippleModule } from 'primeng/ripple';
import { Authservice } from '../service/authservice';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-create-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    FluidModule,
    PasswordModule,
    ProgressSpinnerModule,
    RippleModule,
    DialogModule,
    InputTextModule
  ],
  templateUrl: './create-password.html',
  styleUrl: './create-password.scss',
})
export class CreatePassword {
  username = '';
  password = '';
  isLoading = false;
  passwordFocused = false;
  errorDialog = false;
  errorMessage: any;
  errorSuggestion: any;

  displayEmail: any;
  successDialog = false;
  constructor(private router: Router, private authService: Authservice) { }

  ngOnInit(): void {
    this.getEmailRegister();
  }

  getEmailRegister(): void {
    const email = localStorage.getItem('email-register');
    if (email) {
      this.displayEmail = email.trim();
    }
  }

  get showPasswordRequirements(): boolean {
    return this.passwordFocused || !!this.password;
  }

  get passwordRules() {
    const p = this.password ?? '';
    return [
      { label: '10 to 15 characters', met: p.length >= 10 && p.length <= 15 },
      { label: '1 or more numbers', met: /\d/.test(p) },
      { label: '1 or more capital letters', met: /[A-Z]/.test(p) },
      { label: '1 or more small letters', met: /[a-z]/.test(p) },
      { label: '1 or more special characters', met: /[^A-Za-z0-9]/.test(p) }
    ];
  }

  isPasswordValid(): boolean {
    return this.passwordRules.every((rule) => rule.met);
  }

  isUsernameValid(): boolean {
    const u = this.username?.trim() ?? '';
    return u.length >= 3;
  }

  onContinue(): void {
    if (!this.isUsernameValid() || !this.isPasswordValid()) return;
    this.isLoading = true;
    const payload = {
      email: this.displayEmail,
      password: this.password,
      username: this.username
    };
    console.log(payload);
    this.authService.createPassword(payload).subscribe({
      next: () => {
        this.isLoading = false;
        this.successDialog = true;
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage =  'Failed to create password. Please try again.';
        this.errorSuggestion = 'Please try again with valid username and password.';
        this.errorDialog = true;
      }
    });
  }

  goToLogin(): void {
    this.successDialog = false;
    localStorage.removeItem('email-register'); // optional cleanup
    this.router.navigate(['/auth/login']);
  }
  closeErrorDialog(){
    this.errorDialog = false;
    this.errorMessage = '';
    this.errorSuggestion = ''; 
    this.username = '';
    this.password = '';
  }
}
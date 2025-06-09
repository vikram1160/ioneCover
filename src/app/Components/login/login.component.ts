import { CommonModule } from '@angular/common';
import { Component , Input} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    @Input() isLoginPage: boolean = false;

  ngOnInit() {
   this.isLoginPage = false
  }

  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router, private http: HttpClient,) { }

  onLogin(): void {
    const credentials = {
      userNameOrEmailAddress: this.username,
      password: this.password,
      rememberClient: false,
      singleSignIn: false,
      returnUrl: null,
      captchaResponse: null
    };

    const headers = new HttpHeaders({
      'abp.tenantId': '1004'
    });

       this.http.post(
      'https://wm-demo.iwm.world/WMStandardSDB/usermanagement/api/TokenAuth/Authenticate',
      credentials,
      { headers }
    ).subscribe({
      next: (res: any) => {
        if (res && res.result && res.result.accessToken) {
          localStorage.setItem('token', res.result.accessToken);
          console.log('Login successful:', res);
         this.router.navigate(['/home']);
          alert('Login Successful')
        } else {
          console.error('Token not found in response:', res);
        }
      },
      error: (err) => {
        console.error('Login failed:', err);
      }
    });

  }
}

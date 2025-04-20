import { NgStyle } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IApiResponse, Login, Register } from '../../model/User';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [NgStyle, FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  isLoginFormVisibile = signal<boolean>(true);
  registerObj: Register = new Register();
  loginObj: Login = new Login();
  userService = inject(UserService);
  router = inject(Router);

  toggleForm() {
    this.isLoginFormVisibile.set(!this.isLoginFormVisibile());
  }

  setRole(role: string) {
    this.registerObj.role = role;
  }

  onRegister() {
    this.userService
      .onRegister(this.registerObj)
      .subscribe((res: IApiResponse) => {
        if (res.result) {
          alert('registration succes');
          this.registerObj = new Register();
        } else {
          alert(res.message);
        }
      });
  }

  onLogin() {
    this.userService.onLogin(this.loginObj).subscribe((res: IApiResponse) => {
      if (res.result) {
        sessionStorage.setItem('RfqUser', JSON.stringify(res.data));
        this.userService.setLoggedUser();
        this.router.navigate(['/home']);
      } else {
        alert(res.message);
      }
    });
  }
}

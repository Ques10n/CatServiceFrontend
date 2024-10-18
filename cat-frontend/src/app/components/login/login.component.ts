import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class LoginComponent {
  authService = inject(AuthService)
  router = inject(Router)

  credentials = {
    username: '',
    password: ''
  };

  form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
  })

  constructor() { }


  onSubmit() {
    // this.authService.login(this.credentials).subscribe(
    //   (token) => {
    //     this.authService.saveToken(token); // Сохраняем токен
    //     console.log('User logged in:', token);
    //     this.router.navigate(['cats']); // Перенаправляем на страницу с котами
    //   },
    //   (error) => {
    //     console.error('Login error:', error); // Обработка ошибок
    //     alert('Login failed! Please check your credentials.');
    //   }
    // );
    console.log(this.form.value)

    if (this.form.valid){
      //@ts-ignore
       this.authService.login(this.form.value)
       .subscribe(
        (response) => {
          this.router.navigate(['cats'])
          console.log('Response:', response);
        })
    }
  }
}

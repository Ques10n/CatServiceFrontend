import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class RegisterComponent {
  authService = inject(AuthService)
  router = inject(Router)

  // user = {
  //   username: '',
  //   password: '',
  // };

  form = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
  })

  constructor() { }

  register() {
    console.log(this.form.value)
    if (this.form.valid){
    this.authService.register(this.form.value).subscribe((response) => {
      console.log('Response:', response);
      this.router.navigate(['/login']);
     
    });
  }
}
}

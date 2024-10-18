import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatsComponent } from './components/cats/cats.component';
import { MessagesComponent } from './components/messages/messages.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthInterceptor } from './auth.interceptor';
import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [
//     LoginComponent,
//     RegisterComponent,
//     CatsComponent,
//     MessagesComponent,
    
//   ],
//   imports: [
//     AppRoutingModule,
//     MatCardModule,
//     MatButtonModule,
//     MatFormFieldModule,
//     MatInputModule,
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     CommonModule,
//     ReactiveFormsModule,
//   ],
//   providers: [{
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthInterceptor,
//     multi: true
//   }],
//   schemas: [NO_ERRORS_SCHEMA],
  
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CatsComponent } from './components/cats/cats.component';
import { MessagesComponent } from './components/messages/messages.component';
import { EditCatComponent } from './edit-cat/edit-cat.component';


export const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'cats', component: CatsComponent },
    { path: 'messages', component: MessagesComponent },
    { path: 'edit-cat/:id', component: EditCatComponent  },
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

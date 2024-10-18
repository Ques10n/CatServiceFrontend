import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { TokenResponce } from '../components/login/auth.iterface';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',

})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/auth/token/login/'; 
  http = inject(HttpClient)
  cookieService = inject(CookieService)
  auth_token: string | null = null
  constructor() { }

  get isAuth() {
      if (!this.auth_token){
        this.auth_token= this.cookieService.get('auth_token')
      }

      return !!this.auth_token
  }

  register(user: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register/', user)
  }

  login(credentials: {username: string, password: string}) {
    console.log(this.apiUrl)
    return this.http.post<{ auth_token: string }>(this.apiUrl, credentials).pipe(
      // map(credentials => this.auth_token = credentials.auth_token),
      tap( val => {this.auth_token = val.auth_token 
        this.cookieService.set('auth_token', this.auth_token)
        })
     )
    // .pipe(
    //   map((response: any) => response['auth_token']) // Извлекаем токен из ответа
    // );
  }

  // saveToken(token: string): void {
  //   localStorage.setItem('auth_token', token);
  // }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
}

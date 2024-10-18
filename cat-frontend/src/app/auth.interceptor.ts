import { forwardRef, inject, Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service'; // Путь к вашему AuthService
import { CookieService } from 'ngx-cookie-service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(@Inject(forwardRef(() => AuthService)) private authService: AuthService) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.authService.getToken();

//     if (token) {
//       const cloned = req.clone({
//         setHeaders: {
//           Authorization: `Token ${token}` // Используйте `Bearer` или `Token` в зависимости от вашего API
//         }
//       });
//       return next.handle(cloned); 
//     }

//     return next.handle(req); 
//   }
// }

export const AuthInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService)
  const cookieService = inject(CookieService)
  const token= cookieService.get('auth_token')
  // const token = authService.auth_token
  console.log(req)
  console.log(token)

  if (!token) return next(req)

  req = req.clone({
      setHeaders: {
          Authorization: `Token ${token}`
      }
  })

  return next(req)
}
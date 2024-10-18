import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = 'http://127.0.0.1:8000/api/cats/'; // Замените на ваш API URL

  constructor(private http: HttpClient) { }

  getCats(): Observable<any> {
    const headers = new HttpHeaders({// Используем токен для авторизации
      'Content-Type': 'application/json' // Если нужно
    });
    return this.http.get<Cat[]>(this.apiUrl, { headers })
    // return this.http.get(`${this.apiUrl}`);
  }

  getCatById(catId: number): Observable<Cat> {
    return this.http.get<Cat>(`/api/cats/${catId}/`);
}

  createCat(cat: any): Observable<any> {
    console.log(cat)
    return this.http.post(`${this.apiUrl}`, cat);
  }

  updateCat(catId: number, cat: any): Observable<any> {
    console.log(cat)
    return this.http.put(`${this.apiUrl}${catId}/`, cat);
  }

  deleteCat(catId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${catId}/`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './cat.model'; // Импортируйте модель кота

@Injectable({
  providedIn: 'root'
})
export class CatService {
  private apiUrl = 'http://127.0.0.1:8000/api/cats/'; // URL вашего API

  constructor(private http: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }

  createCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.apiUrl, cat);
  }

  updateCat(cat: Cat): Observable<Cat> {
    return this.http.put<Cat>(`${this.apiUrl}${cat.id}/`, cat);
  }

  deleteCat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`);
  }
}
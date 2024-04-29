import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl= "http://localhost:5034/api/movie"
  constructor(private http: HttpClient) {}

  GetById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }
  GetAll(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}`).pipe(
      map((response: Movie[]) => {
        return response;
      })
    );
  }
  Create(data: Movie): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}`, data);
  }
  Delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  Update(data: Movie): Observable<any> {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }
}
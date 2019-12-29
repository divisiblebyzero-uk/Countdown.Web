import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NumbersSolution } from './numbers-solution';

@Injectable({
  providedIn: 'root'
})
export class NumbersGameService {

  private baseUrl = 'https://localhost:44389/api/Numbers';
  constructor(private http: HttpClient) {

  }

  getNumbersSolutions(numbers: string): Observable<NumbersSolution[]> {
    return this.http.get<NumbersSolution[]>(this.baseUrl + '/' + numbers);
  }
}
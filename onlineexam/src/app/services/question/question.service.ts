import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestion():Observable<any>{
   return  this.http.get("https://quizapi.io/api/v1/questions?apiKey=U0fxQHiclEmRYqbl8qUntjPjJpGJ08a7tpZCo4zI&category=sql&limit=10");
  }
}

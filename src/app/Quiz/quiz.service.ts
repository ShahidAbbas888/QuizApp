import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }




  getQuiz():Observable<object>{
    return this.http.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple');
  
  }
}



// Website name for getting Api
//https://opentdb.com/api_config.php  
//https://opentdb.com/api.php?amount=10&category=18&type=multiple
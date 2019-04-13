import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answers } from './../models/answers';
import { Questions } from './../models/questions';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateSurveyService {
  private ques: Questions;
  private ans: Answers;

  private endpoint = 'http://localhost:3000/api/survey/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {}

  public getQuestion(): Observable<any>{
    return this.http.get<any>(this.endpoint, this.httpOptions);
}

  // creates and adds answer
  public addAnswer(answer: Answers): Observable<any> {
    return this.http.post<any>(this.endpoint + 'addans', answer, this.httpOptions);
  }

  // The post request for edit question
  public editQuestion(question: Questions): Observable<any> {
    return this.http.post<any>(
      this.endpoint + 'addques',
      question,
      this.httpOptions
    );
  }

  // The get request for edit question page
  public getEditQuestionPage(question: Questions): Observable<any> {
    return this.http.get<any>(this.endpoint + 'editques/' + question.id, this.httpOptions);
  }

  // This Method Deletes Question
  public deleteQuestion(question: Questions): Observable<any> {
    return this.http.post<any>(this.endpoint + 'deleteques/' + question.id, this.httpOptions);
  }
}

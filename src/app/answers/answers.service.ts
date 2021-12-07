import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { Answer } from './answer.class';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  baseurl: string = "http://localhost:5127/api/answers"
  constructor(private httpSvc: HttpClient) { }

  list(): Observable<Answer[]> {
    return this.httpSvc.get(this.baseurl) as Observable<Answer[]>;
  }

  getById(id: number): Observable<Answer> {
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<Answer>;
  }

  create(answer: Answer): Observable<Answer> {
    return this.httpSvc.post(this.baseurl, answer) as Observable<Answer>;
  }

  update(answer: Answer): Observable<Answer> {
    return this.httpSvc.put(`${this.baseurl}/${answer.id}`, answer) as Observable<Answer>;
  }

  remove(id: number): Observable<Answer> {
    return this.httpSvc.delete(`${this.baseurl}/${id}`) as Observable<Answer>;
  }
}

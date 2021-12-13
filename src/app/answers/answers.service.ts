import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { Answer } from './answer.class';

@Injectable({
  providedIn: 'root'
})
export class AnswersService {

  baseurl: string = `${this.sysSvc.baseurl}/api/answers`;
  constructor(private httpSvc: HttpClient,
              private sysSvc: SystemService) { }

  list(): Observable<Answer[]> {
    return this.httpSvc.get(this.baseurl) as Observable<Answer[]>;
  }

  getById(id: number): Observable<Answer> {
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<Answer>;
  }

  getAnswersByType(id: number): Observable<Answer[]> {
    return this.httpSvc.get(`${this.baseurl}/answers/${id}`) as Observable<Answer[]>;
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

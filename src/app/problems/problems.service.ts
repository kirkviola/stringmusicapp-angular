import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Problem } from './problem.class';

@Injectable({
  providedIn: 'root'
})
export class ProblemsService {

  baseurl: string = "http://localhost:5127/api/problems";
  constructor(private httpSvc: HttpClient) { }

  list(): Observable<Problem[]> {
    return this.httpSvc.get(this.baseurl) as Observable<Problem[]>;
  }

  getById(id: number): Observable<Problem> {
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<Problem>;
  }

  create(problem: Problem): Observable<Problem> {
    return this.httpSvc.post(this.baseurl, problem) as Observable<Problem>;
  }

  update(problem: Problem): Observable<Problem> {
    return this.httpSvc.put(`${this.baseurl}/${problem.id}`, problem) as Observable<Problem>;
  }

  check(problem: Problem): Observable<Problem> {
    return this.httpSvc.put(`${this.baseurl}/check`, problem) as Observable<Problem>;
  }

  remove(id: number): Observable<Problem> {
    return this.httpSvc.delete(`${this.baseurl}/${id}`) as Observable<Problem>;
  }
}

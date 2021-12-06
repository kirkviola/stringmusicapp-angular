import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProblemModel } from './problem-models.class';

@Injectable({
  providedIn: 'root'
})
export class ProblemModelsService {

  baseurl: string = "http://localhost:5127/api/problemmodels";
  constructor(private httpSvc: HttpClient) { }

  list(): Observable<ProblemModel[]> {
    return this.httpSvc.get(this.baseurl) as Observable<ProblemModel[]>;
  }

  getById(id: number): Observable<ProblemModel> {
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<ProblemModel>;
  }

  create(problemModel: ProblemModel): Observable<ProblemModel> {
    return this.httpSvc.post(this.baseurl, problemModel) as Observable<ProblemModel>;
  }

  update(problemModel: ProblemModel): Observable<ProblemModel> {
    return this.httpSvc.put(`${this.baseurl}/${problemModel.id}`, problemModel) as Observable<ProblemModel>;
  }

  remove(id: number): Observable<ProblemModel> {
    return this.httpSvc.delete(`${this.baseurl}/${id}`) as Observable<ProblemModel>;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityType } from './activity-type.class';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypesService {
  baseurl: string = "http://localhost:5127/api/activitytypes";

  constructor(private httpSvc: HttpClient) { }

  list(): Observable<ActivityType[]> {
    return this.httpSvc.get(this.baseurl) as Observable<ActivityType[]>;
  }

  getById(id: number): Observable<ActivityType> {
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<ActivityType>;
  }

  create(activity: ActivityType): Observable<ActivityType> {
    return this.httpSvc.post(this.baseurl, activity) as Observable<ActivityType>;
  }

  update(activity: ActivityType): Observable<ActivityType> {
    return this.httpSvc.put(`${this.baseurl}/${activity.id}`, activity) as Observable<ActivityType>;
  }

  remove(id: number): Observable<ActivityType> {
    return this.httpSvc.delete(`${this.baseurl}/${id}`) as Observable<ActivityType>;
  }
}

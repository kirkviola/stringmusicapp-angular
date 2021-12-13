import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { ActivityType } from './activity-type.class';

@Injectable({
  providedIn: 'root'
})
export class ActivityTypesService {
  baseurl: string = `${this.sysSvc.baseurl}/api/activitytypes`;

  constructor(private httpSvc: HttpClient,
              private sysSvc: SystemService) { }

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

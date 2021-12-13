import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { Activity } from './activity.class';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  baseurl: string = `${this.sysSvc.baseurl}/api/activities`;
  constructor(private httpSvc: HttpClient, private sysSvc: SystemService) { }

  list(): Observable<Activity[]>{
    return this.httpSvc.get(`${this.baseurl}`) as Observable<Activity[]>;
  }

  getById(id: number): Observable<Activity>{
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<Activity>;
  }

  getUserActivities(id: number): Observable<Activity[]> {
    return this.httpSvc.get(`${this.baseurl}/useractivities/${id}`) as Observable<Activity[]>;
  }

  create(activity: Activity): Observable<Activity>{
    return this.httpSvc.post(`${this.baseurl}`, activity) as Observable<Activity>;
  }

  update(activity: Activity): Observable<Activity>{
    return this.httpSvc.put(`${this.baseurl}/${activity.id}`, activity) as Observable<Activity>;
  }

  remove(id: number): Observable<Activity>{
    return this.httpSvc.delete(`${this.baseurl}/${id}`) as Observable<Activity>;
  }

  generateActivity(typeId: number, size: number, activity: Activity): Observable<Activity>{
    return this.httpSvc.post(`${this.baseurl}/create/${typeId}/${size}/${this.sysSvc.user.id}`, activity) as Observable<Activity>;

  }

}

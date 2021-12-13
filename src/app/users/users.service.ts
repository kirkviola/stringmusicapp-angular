import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../system.service';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseurl: string = `${this.sysSvc.baseurl}/api/users`;

  constructor(
    private httpSvc: HttpClient,
    private sysSvc: SystemService
  ) { }

  list(): Observable<User[]>{
    return this.httpSvc.get(`${this.baseurl}`) as Observable<User[]>;
  }

  getById(id: number): Observable<User>{
    return this.httpSvc.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  login(username: string, password: string): Observable<User>{
    return this.httpSvc.get(`${this.baseurl}/${username}/${password}`) as Observable<User>;
  }

  create(user: User): Observable<User> {
    return this.httpSvc.post(`${this.baseurl}`, user) as Observable<User>;
  }

  update(user: User): Observable<User> {
    return this.httpSvc.put(`${this.baseurl}/${user.id}`, user) as Observable<User>;
  }

  remove(id: number): Observable<User> {
    return this.httpSvc.delete(`${this.baseurl}/${id}`) as Observable<User>;
  }
}

import { Injectable } from '@angular/core';
import { User } from './users/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user!: User;

  constructor() { }

  isLoggedIn(): boolean {
    if(this.user === null){
      return false;
    }
    else{
      return true;
    }
  }
}

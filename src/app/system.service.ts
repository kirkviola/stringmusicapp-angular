import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './users/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user!: User;

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    if(this.user === null || this.user === undefined){
      this.router.navigate(['/users/login']);
      return false;
    }
    else{
      return true;
    }
  }
}

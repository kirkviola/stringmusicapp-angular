import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  pass: string = "";
  badPass: boolean = false;
  constructor(private userSvc: UsersService, private router: Router) { }

  create(): void {
    if(this.pass !== this.user.password){
      this.badPass = true;
      this.user.password = "";
      this.pass = "";
      return;
    }
    this.userSvc.create(this.user).subscribe({
      next: res => {
        console.debug(res, "user created!");
        this.router.navigate(["/home"]);
      }, error: err => { console.error(err);}
    });
  }

  ngOnInit(): void {
  }

}

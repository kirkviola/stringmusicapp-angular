import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  username: string = "";
  password: string = "";
  error: boolean = false;
  constructor(private userSvc: UsersService, private sysSvc: SystemService, private router: Router) { }

  login(): void {
    if(this.username === '' || this.password === ''){
      this.error = true;
      this.password = "";
      return;
    }
    this.userSvc.login(this.username, this.password).subscribe({
      next: res => {
        this.sysSvc.user = res;
        console.debug(res, "login successful");
        this.router.navigate(['/home']);
      }, error: err => {
        console.error(err);
        this.error = true;
        this.password = "";
      }
    });
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users!: User[];
  constructor(private sysSvc: SystemService, private userSvc: UsersService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();
    
    this.userSvc.list().subscribe({
      next: res => {
        this.users = res;
        console.debug(res, "users found!");
      }, error: err => {console.error(err);}
    });
  }

}

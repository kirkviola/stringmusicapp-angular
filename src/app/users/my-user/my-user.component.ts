import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.css']
})
export class MyUserComponent implements OnInit {

  user: User = new User();
  constructor(private sysSvc: SystemService, private userSvc: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.user = this.sysSvc.user;
  }

}

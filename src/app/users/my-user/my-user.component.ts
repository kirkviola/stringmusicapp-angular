import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/activities/activity.class';
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
  inProgress: Activity[] = [];
  complete: Activity[] = [];
  constructor(private sysSvc: SystemService, private userSvc: UsersService, private route: ActivatedRoute, private router: Router) { }

  sortActivities(): void {
      for(let act of this.user.activities){
        if(act.isCompleted){
          this.complete.push(act);
        }
        else {
          this.inProgress.push(act);
        }
      }
  }
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.user = this.sysSvc.user;
    this.sortActivities();
  }

}

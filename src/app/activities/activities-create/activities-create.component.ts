import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/users/user.class';
import { ActivityType } from '../activity-type.class';
import { ActivityTypesService } from '../activity-types.service';
import { Activity } from '../activity.class';

@Component({
  selector: 'app-activities-create',
  templateUrl: './activities-create.component.html',
  styleUrls: ['./activities-create.component.css']
})
export class ActivitiesCreateComponent implements OnInit {
  activity: Activity = new Activity();
  size: number = 1;
  user!: User
  activityTypes: ActivityType[] = [];

  constructor(private sysSvc: SystemService, private router: Router, private aTypeSvc: ActivityTypesService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.user = this.sysSvc.user;
    this.aTypeSvc.list().subscribe({
      next: res => {
        this.activityTypes = res;
        console.debug(res, "types found");
      }, error: err => { console.error(err);}
    });
  }

}

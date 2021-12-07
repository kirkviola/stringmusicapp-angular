import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/users/user.class';
import { ActivitiesService } from '../activities.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypesService } from '../activity-types.service';
import { Activity } from '../activity.class';

@Component({
  selector: 'app-activities-create',
  templateUrl: './activities-create.component.html',
  styleUrls: ['./activities-create.component.css']
})
export class ActivitiesCreateComponent implements OnInit {
  name: string = "";
  size: number = 1;
  activity: Activity = new Activity();

  activityTypes: ActivityType[] = [];
  activityId: number = 0;

  constructor(private sysSvc: SystemService, private router: Router, private aTypeSvc: ActivityTypesService,
    private actSvc: ActivitiesService) { }

 
  create(): void {
    this.actSvc.generateActivity(this.activityId, this.size, this.activity).subscribe({
      next: res => {
        console.debug(res, "activity created!");
        this.router.navigate(['/users/myuser']);
      }, error: err => {console.error(err);}
    });
  }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();

    this.aTypeSvc.list().subscribe({
      next: res => {
        this.activityTypes = res;
        console.debug(res, "types found");
      }, error: err => { console.error(err);}
    });
  }

}

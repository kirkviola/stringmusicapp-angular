import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { ActivitiesService } from '../activities.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypesService } from '../activity-types.service';
import { Activity } from '../activity.class';

@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.css']
})
export class ActivitiesListComponent implements OnInit {
  activityTypes: ActivityType[] = [];
  activities: Activity[] = [];

  constructor(private sysSvc: SystemService, private actSvc: ActivitiesService, private aTypeSvc: ActivityTypesService) { }

  delete(id: number): void {
    this.actSvc.remove(id).subscribe({
      next: res => { console.debug(res, "activity deleted!");
      this.refresh();},
      error: err => { console.error(err);}
    });
  }

  reset(activity: Activity): void {
    for(let problem of activity.problems){
      problem.selectedAnswer = "";
    }
    activity.isComplete = false;
    this.actSvc.update(activity).subscribe({
      next: res => {
        console.debug(res, "activity reset");
        this.refresh();
      }, error: err => { console.error(err);}
    });
  }
  refresh(): void {
    this.actSvc.list().subscribe({
      next: res => {
        this.activities = res;
        console.debug(res, "all activities found");
      }, error: err => {console.error(err);}
    });
  }
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();
    this.aTypeSvc.list().subscribe({
      next: res => {
        this.activityTypes = res;
        console.debug(res, "types found");
      }, error: err => {console.error(err);}
    });
    this.refresh();
    
  }

}

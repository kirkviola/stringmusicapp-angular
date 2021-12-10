import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivitiesService } from 'src/app/activities/activities.service';
import { Activity } from 'src/app/activities/activity.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-activity-detail',
  templateUrl: './user-activity-detail.component.html',
  styleUrls: ['./user-activity-detail.component.css']
})
export class UserActivityDetailComponent implements OnInit {

  activity: Activity = new Activity();
  actNbr: number = 0;
  ansColor: string = 'green';
  
  constructor(private sysSvc: SystemService,private  actSvc: ActivitiesService,private route: ActivatedRoute) { }

  checkCorrect(): void {
    for (let prob of this.activity.problems){
        prob.styleType = (prob.pointsEarned === 0) ? "wrong" : "normal";
    }
  }
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.actNbr = +this.route.snapshot.params['id'];
    this.actSvc.getById(this.actNbr).subscribe({
      next: res => {
        this.activity = res;
        console.debug(res, "activity found");
        this.checkCorrect();
      }, error: err => { console.error(err);}
    });
  }

}

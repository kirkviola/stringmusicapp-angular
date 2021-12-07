import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from 'src/app/activities/activities.service';
import { ActivityTypesService } from 'src/app/activities/activity-types.service';
import { Activity } from 'src/app/activities/activity.class';
import { AnswersService } from 'src/app/answers/answers.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  activity: Activity = new Activity();
  actNbr: number = 0;
  back: boolean = false;
  forward: boolean = true;
  idx: number = 0;
  constructor(private actSvc: ActivitiesService, private route: ActivatedRoute, private router: Router, private sysSvc: SystemService,
    private ansSvc: AnswersService
   ) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.actNbr = +this.route.snapshot.params['id'];
    this.actSvc.getById(this.actNbr).subscribe({
      next: res => {
        this.activity = res;

        console.debug(res, "activity found");
      }, error: err => { console.error(err);}
    });
  }

}

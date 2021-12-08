import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from 'src/app/activities/activities.service';
import { ActivityTypesService } from 'src/app/activities/activity-types.service';
import { Activity } from 'src/app/activities/activity.class';
import { Answer } from 'src/app/answers/answer.class';
import { AnswersService } from 'src/app/answers/answers.service';
import { SystemService } from 'src/app/system.service';
import { ProblemsService } from '../problems.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  activity: Activity = new Activity();
  actNbr: number = 0;
  answers: Answer[] = [];
  back: boolean = false;
  forward: boolean = true;
  idx: number = 0;
  initSubmit: boolean = false;

  constructor(private actSvc: ActivitiesService, private route: ActivatedRoute, private router: Router, private sysSvc: SystemService,
    private ansSvc: AnswersService, private problSvc: ProblemsService
   ) { }

  next(): void {
      this.problSvc.check(this.activity.problems[this.idx]).subscribe({
        next: res => {
          console.debug(res, "problem scored");
          if(++this.idx === this.activity.problems.length - 1){
            this.forward = false;
          }
          if(this.idx > 0){
            this.back = true;
          }
        }, error: err => { console.error(err);}
      });
  }


  previous(): void {
    this.problSvc.check(this.activity.problems[this.idx]).subscribe({
      next: res => {
        console.debug(res, "problem scored");
        if(--this.idx === 0){
          this.back = false;
        }
        if(this.idx < this.activity.problems.length - 1){
          this.forward = true;
        }
      }
    })
  }

  initialSubmit(): void {
    this.initSubmit = true;
  }

  finalSubmit(): void {
    this.problSvc.check(this.activity.problems[this.idx]).subscribe({
      next: res => {
        console.debug(res, "final score");
        this.actSvc.getById(this.activity.id).subscribe({
          next: res => {
            this.activity = res;
            this.activity.isComplete = true;
            this.actSvc.update(this.activity).subscribe({
              next: res => {
                console.debug(res, "submitted!");
                this.router.navigate(["/users/myuser"]);
              }, error: err => { console.error(err);}
            });
          }, error: err => { console.error(err);}
        });
      }, error: err => { console.error(err);}
    });
  }
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();

    this.actNbr = +this.route.snapshot.params['id'];
    this.actSvc.getById(this.actNbr).subscribe({
      next: res => {
        this.activity = res;
        this.ansSvc.getAnswersByType(res.activityTypeId).subscribe({
          next: res => {
            this.answers = res;
            console.debug(res, "answers found");
          }, error: err => { console.error(err);}
        });
        console.debug(res, "activity found");
      }, error: err => { console.error(err);}
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityType } from 'src/app/activities/activity-type.class';
import { ActivityTypesService } from 'src/app/activities/activity-types.service';
import { SystemService } from 'src/app/system.service';
import { Answer } from '../answer.class';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.css']
})
export class AnswerCreateComponent implements OnInit {

  answer: Answer = new Answer();
  activityTypes: ActivityType[] = [];
  constructor(private ansSvc: AnswersService, private sysSvc: SystemService, private actTypeSvc: ActivityTypesService, private router: Router) { }

  save(): void {
    this.ansSvc.create(this.answer).subscribe({
      next: res => {
        console.debug(res, "answer created!");
        this.router.navigate(['/answers']);
      }, error: err => { console.error(err);}
    });
  }
  ngOnInit(): void {

    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.actTypeSvc.list().subscribe({
      next: res => {
        this.activityTypes = res;
        console.debug(res, "types found");
      }, error: err => { console.error(err);}
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivityType } from 'src/app/activities/activity-type.class';
import { ActivityTypesService } from 'src/app/activities/activity-types.service';
import { SystemService } from 'src/app/system.service';
import { Answer } from '../answer.class';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {

  activityTypes: ActivityType[] = [];
  answers: Answer[] = [];
  constructor(private ansSvc: AnswersService, private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.ansSvc.list().subscribe({
      next: res => {
        this.answers = res;
        console.debug(res, "answers found");
      }, error: err => { console.error(err);}
    });
  }

}

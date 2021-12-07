import { Component, OnInit } from '@angular/core';
import { Answer } from '../answer.class';
import { AnswersService } from '../answers.service';

@Component({
  selector: 'app-answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.css']
})
export class AnswersListComponent implements OnInit {

  answers: Answer[] = [];
  constructor(private ansSvc: AnswersService) { }

  ngOnInit(): void {
    this.ansSvc.list().subscribe({
      next: res => {
        this.answers = res;
        console.debug(res, "answers found");
      }, error: err => { console.error(err);}
    });
  }

}

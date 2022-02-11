import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnswerCreateComponent } from './answer-create/answer-create.component';
import { AnswerDetailComponent } from './answer-detail/answer-detail.component';
import { AnswerEditComponent } from './answer-edit/answer-edit.component';
import { AnswersListComponent } from './answers-list/answers-list.component';




@NgModule({
  declarations: [
    AnswerCreateComponent,
    AnswerDetailComponent,
    AnswerEditComponent,
    AnswersListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    AnswerCreateComponent,
    AnswerDetailComponent,
    AnswerEditComponent,
    AnswersListComponent
  ]
})
export class AnswerModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { E404Component } from './misc/e404/e404.component';
import { ProblemComponent } from './problems/problem/problem.component';
import { UserModule } from './users/user.module';
import { ActivityModule } from './activities/activity.module';
import { SharedModule } from './shared/shared.module';
import { ProblemModelModule } from './problem-models/problem-model.module';
import { AnswerModule } from './answers/answer.module';


@NgModule({
  declarations: [
    AppComponent,
    E404Component,
    ProblemComponent,
    
  ],
  imports: [
    BrowserModule,
    UserModule,
    ActivityModule,
    AnswerModule,
    SharedModule,
    ProblemModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

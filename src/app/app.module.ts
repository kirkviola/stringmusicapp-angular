import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';
import { MenuComponent } from './misc/menu/menu.component';
import { MenuItemComponent } from './misc/menu-item/menu-item.component';
import { E404Component } from './misc/e404/e404.component';
import { HomeComponent } from './misc/home/home.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { MyUserComponent } from './users/my-user/my-user.component';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivitiesCreateComponent } from './activities/activities-create/activities-create.component';
import { ProblemComponent } from './activities/problem/problem.component';
import { UserActivityDetailComponent } from './users/user-activity-detail/user-activity-detail.component';
import { ModelsListComponent } from './problem-models/models-list/models-list.component';
import { ModelsEditComponent } from './problem-models/models-edit/models-edit.component';
import { ModelsCreateComponent } from './problem-models/models-create/models-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { AnswersListComponent } from './answers/answers-list/answers-list.component';
import { AnswerDetailComponent } from './answers/answer-detail/answer-detail.component';
import { AnswerEditComponent } from './answers/answer-edit/answer-edit.component';
import { ActivityTypeCreateComponent } from './activities/activity-type-create/activity-type-create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserloginComponent,
    MenuComponent,
    MenuItemComponent,
    
    E404Component,
    HomeComponent,
    UserCreateComponent,
    MyUserComponent,
    ActivitiesListComponent,
    ActivitiesCreateComponent,
    ProblemComponent,
    UserActivityDetailComponent,
    ModelsListComponent,
    ModelsEditComponent,
    ModelsCreateComponent,
    UserEditComponent,
    AnswersListComponent,
    AnswerDetailComponent,
    AnswerEditComponent,
    ActivityTypeCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

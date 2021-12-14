import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesCreateComponent } from './activities/activities-create/activities-create.component';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { ActivityTypeCreateComponent } from './activities/activity-type-create/activity-type-create.component';
import { ActivityTypeEditComponent } from './activities/activity-type-edit/activity-type-edit.component';
import { AnswerCreateComponent } from './answers/answer-create/answer-create.component';
import { AnswerDetailComponent } from './answers/answer-detail/answer-detail.component';
import { AnswerEditComponent } from './answers/answer-edit/answer-edit.component';
import { AnswersListComponent } from './answers/answers-list/answers-list.component';
import { E404Component } from './misc/e404/e404.component';
import { HomeComponent } from './misc/home/home.component';
import { ModelsCreateComponent } from './problem-models/models-create/models-create.component';
import { ModelsEditComponent } from './problem-models/models-edit/models-edit.component';
import { ModelsListComponent } from './problem-models/models-list/models-list.component';
import { ProblemComponent } from './problems/problem/problem.component';
import { MyUserComponent } from './users/my-user/my-user.component';
import { UserActivityDetailComponent } from './users/user-activity-detail/user-activity-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: "users", component: UserlistComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/login", component: UserloginComponent},
  {path: "users/myuser", component: MyUserComponent},
  {path: "users/activity/:id", component: UserActivityDetailComponent},
  {path: "users/edit/:id", component: UserEditComponent},

  {path: "activities", component: ActivitiesListComponent},
  {path: "activities/create", component: ActivitiesCreateComponent},
  {path: "activities/type/edit/:id", component: ActivityTypeEditComponent},
  {path: "activities/detail/:id", component: ActivityDetailComponent},
  {path: "activities/type/create", component: ActivityTypeCreateComponent},
  {path: "activities/problems/:id", component: ProblemComponent},

  {path: "problemmodels", component: ModelsListComponent},
  {path: "problemmodels/create", component: ModelsCreateComponent},
  {path: "problemmodels/edit/:id", component: ModelsEditComponent},

  {path: "answers", component: AnswersListComponent},
  {path: "answers/detail/:id", component: AnswerDetailComponent},
  {path: "answers/edit/:id", component: AnswerEditComponent},
  {path: "answers/create", component: AnswerCreateComponent},

  {path: "home", component: HomeComponent},

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

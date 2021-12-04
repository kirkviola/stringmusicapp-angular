import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesCreateComponent } from './activities/activities-create/activities-create.component';
import { ActivitiesListComponent } from './activities/activities-list/activities-list.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { E404Component } from './misc/e404/e404.component';
import { HomeComponent } from './misc/home/home.component';
import { MyUserComponent } from './users/my-user/my-user.component';
import { UserActivityDetailComponent } from './users/user-activity-detail/user-activity-detail.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';

const routes: Routes = [
  {path: '', redirectTo: 'users/login', pathMatch: 'full'},

  {path: "users", component: UserlistComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/login", component: UserloginComponent},
  {path: "users/myuser", component: MyUserComponent},
  {path: "users/activity/:id", component: UserActivityDetailComponent},

  {path: "activities", component: ActivitiesListComponent},
  {path: "activities/create", component: ActivitiesCreateComponent},
  {path: "activities/detail/:id", component: ActivityDetailComponent},

  {path: "home", component: HomeComponent},

  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

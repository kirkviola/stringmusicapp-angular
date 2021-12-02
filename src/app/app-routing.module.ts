import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E404Component } from './misc/e404/e404.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';

const routes: Routes = [
  {path: '', redirectTo: 'users/login', pathMatch: 'full'},

  {path: "users", component: UserlistComponent},
  {path: "users/create", component: UserCreateComponent},
  {path: "users/login", component: UserloginComponent},

  {path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

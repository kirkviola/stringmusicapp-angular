import { NgModule } from '@angular/core';
import { MyUserComponent } from './my-user/my-user.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UserActivityDetailComponent } from './user-activity-detail/user-activity-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MyUserComponent,
    StudentListComponent,
    UserActivityDetailComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserlistComponent,
    UserloginComponent

  ],
  imports: [
    SharedModule
  ],
  exports: [
    MyUserComponent,
    StudentListComponent,
    UserActivityDetailComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserEditComponent,
    UserlistComponent,
    UserloginComponent
  ]
})
export class UserModule { }

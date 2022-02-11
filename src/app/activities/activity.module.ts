import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesCreateComponent } from './activities-create/activities-create.component';
import { ActivitiesListComponent } from './activities-list/activities-list.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityTypeCreateComponent } from './activity-type-create/activity-type-create.component';
import { ActivityTypeEditComponent } from './activity-type-edit/activity-type-edit.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ActivitiesListComponent,
    ActivityDetailComponent,
    ActivityTypeCreateComponent,
    ActivityTypeEditComponent,
    ActivitiesCreateComponent

  ],
  imports: [
    SharedModule
  ],
  exports: [
    ActivitiesCreateComponent,
    ActivitiesListComponent,
    ActivityDetailComponent,
    ActivityTypeCreateComponent,
    ActivityTypeEditComponent
  ]
})
export class ActivityModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ModelsCreateComponent } from './models-create/models-create.component';
import { ModelsEditComponent } from './models-edit/models-edit.component';
import { ModelsListComponent } from './models-list/models-list.component';



@NgModule({
  declarations: [
    ModelsCreateComponent,
    ModelsEditComponent,
    ModelsListComponent

  ],
  imports: [
    SharedModule
  ],
  exports: [
    ModelsCreateComponent,
    ModelsEditComponent,
    ModelsListComponent
  ]
})
export class ProblemModelModule { }

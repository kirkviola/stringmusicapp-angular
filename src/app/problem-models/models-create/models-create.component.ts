import { Component, OnInit } from '@angular/core';
import { ActivityType } from 'src/app/activities/activity-type.class';
import { ActivityTypesService } from 'src/app/activities/activity-types.service';
import { SystemService } from 'src/app/system.service';
import { ProblemModel } from '../problem-models.class';
import { ProblemModelsService } from '../problem-models.service';

@Component({
  selector: 'app-models-create',
  templateUrl: './models-create.component.html',
  styleUrls: ['./models-create.component.css']
})
export class ModelsCreateComponent implements OnInit {

  activities!: ActivityType[];
  model: ProblemModel = new ProblemModel();

  constructor(private sysSvc: SystemService, 
              private modelsSvc: ProblemModelsService,
              private actTSvc: ActivityTypesService) { }

  save(): void {
    this.modelsSvc.create(this.model).subscribe({
      next: res => {
        console.debug(res, "model created");
      }, error: err => { console.error(err);}
    });
  }
  
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.actTSvc.list().subscribe({
      next: res => {
        this.activities = res;
        console.debug(res, "types found");
      }, error: err => { console.error(err);}
    });
  }

}

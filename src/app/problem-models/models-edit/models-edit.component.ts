import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityType } from 'src/app/activities/activity-type.class';
import { ActivityTypesService } from 'src/app/activities/activity-types.service';
import { SystemService } from 'src/app/system.service';
import { ProblemModel } from '../problem-models.class';
import { ProblemModelsService } from '../problem-models.service';

@Component({
  selector: 'app-models-edit',
  templateUrl: './models-edit.component.html',
  styleUrls: ['./models-edit.component.css']
})
export class ModelsEditComponent implements OnInit {

  model: ProblemModel = new ProblemModel();
  modelNbr: number = 0;
  confirmDelete: boolean = false;
  types: ActivityType[] = [];
  constructor(private sysSvc: SystemService, private modelSvc: ProblemModelsService,
    private route: ActivatedRoute, private router: Router, private aTypeSvc: ActivityTypesService) { }

  save(): void {
    this.modelSvc.update(this.model).subscribe({
      next: res => {
        console.debug(res, "model updated");
        this.router.navigate(['problemmodels']);
      }, error: err => {console.error(err);}
    });
  }

  initDelete(): void {
    this.confirmDelete = true;
  }

  finalDelete(): void {
    this.modelSvc.remove(this.model.id).subscribe({
      next: res => { console.debug(res, "model deleted");
      this.router.navigate(['/problemmodels']);
    }, error: err => {console.error(err);}
    });
  }


  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.modelNbr = +this.route.snapshot.params['id']
    this.modelSvc.getById(this.modelNbr).subscribe({
      next: res => {
        this.model = res;
        console.debug(res, "model found");
      }, error: err => { console.error(err);}
    });

    this.aTypeSvc.list().subscribe({
      next: res => {
        this.types = res;
        console.debug(res, "types found");
      }, error: err => { console.error(err);}
    });
  }

}

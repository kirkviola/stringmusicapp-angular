import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { ProblemModel } from '../problem-models.class';
import { ProblemModelsService } from '../problem-models.service';

@Component({
  selector: 'app-models-list',
  templateUrl: './models-list.component.html',
  styleUrls: ['./models-list.component.css']
})
export class ModelsListComponent implements OnInit {

  models: ProblemModel[] = [];
  constructor(private sysSvc: SystemService, private modelSvc: ProblemModelsService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.modelSvc.list().subscribe({
      next: res => {
        this.models = res;
        console.debug(res, "models found");
      }, error: err => { console.error(err);}
    });
  }

}

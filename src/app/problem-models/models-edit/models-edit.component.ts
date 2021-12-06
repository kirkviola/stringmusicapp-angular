import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-models-edit',
  templateUrl: './models-edit.component.html',
  styleUrls: ['./models-edit.component.css']
})
export class ModelsEditComponent implements OnInit {

  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
  }

}

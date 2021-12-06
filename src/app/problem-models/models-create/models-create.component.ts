import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-models-create',
  templateUrl: './models-create.component.html',
  styleUrls: ['./models-create.component.css']
})
export class ModelsCreateComponent implements OnInit {

  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
  }

}

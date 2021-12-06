import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit {

  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
  }

}

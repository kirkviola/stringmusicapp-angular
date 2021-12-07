import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  constructor(private sysSvc: SystemService, private router: Router) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();
  }

}

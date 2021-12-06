import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-activity-detail',
  templateUrl: './user-activity-detail.component.html',
  styleUrls: ['./user-activity-detail.component.css']
})
export class UserActivityDetailComponent implements OnInit {

  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
  }

}

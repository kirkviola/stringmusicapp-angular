import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypesService } from '../activity-types.service';

@Component({
  selector: 'app-activity-type-create',
  templateUrl: './activity-type-create.component.html',
  styleUrls: ['./activity-type-create.component.css']
})
export class ActivityTypeCreateComponent implements OnInit {

  type: ActivityType = new ActivityType();
  constructor(private sysSvc: SystemService, private actTypeSvc: ActivityTypesService, private router: Router) { }

  save(): void {
    this.actTypeSvc.create(this.type).subscribe({
      next: res => {
        console.debug(res, "type created!");
        this.router.navigate(['/activities']);
      }, error: err => { console.error(err);}
    });
  }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();
  }

}

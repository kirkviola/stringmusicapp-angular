import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { ActivityType } from '../activity-type.class';
import { ActivityTypesService } from '../activity-types.service';

@Component({
  selector: 'app-activity-type-edit',
  templateUrl: './activity-type-edit.component.html',
  styleUrls: ['./activity-type-edit.component.css']
})
export class ActivityTypeEditComponent implements OnInit {

  type: ActivityType = new ActivityType();
  typeNbr: number = 0;
  initDel: boolean = false;
  constructor(private aTypeSvc: ActivityTypesService, private sysSvc: SystemService, private route: ActivatedRoute, private router: Router) { }

  save(): void {
    this.aTypeSvc.update(this.type).subscribe({
      next: res => { console.debug(res, "type updated");
      this.router.navigate(['/activities'])},
      error: err => { console.error(err);}
    });
  }

  initDelete(): void {
    this.initDel = true;
  }

  finalDelete(): void {
    this.aTypeSvc.remove(this.type.id).subscribe({
      next: res => { console.debug(res, "type removed");
      this.router.navigate(['/activities'])},
      error: err => { console.error(err);}
    });
  }
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.typeNbr = +this.route.snapshot.params['id'];
    this.aTypeSvc.getById(this.typeNbr).subscribe({
      next: res => {
        this.type = res;
        console.debug(res, "type found");
      }, error: err => { console.error(err);}
    });
  }

}

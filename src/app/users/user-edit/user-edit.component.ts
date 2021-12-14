import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user!: User;
  userNbr: number = 0;
  isAdmin: boolean = false;
  constructor(private sysSvc: SystemService, private userSvc: UsersService, private router: Router,
              private route: ActivatedRoute) { }

  save(): void {
    this.userSvc.update(this.user).subscribe({
      next: res => {
        console.debug(res, "User Updated");
        this.router.navigate(['/home']);
      }, error: err => { console.error(err);}
    });
  }
  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
    this.sysSvc.isAdmin();

    this.userNbr = +this.route.snapshot.params['id'];
    this.userSvc.getById(this.userNbr).subscribe({
      next: res => {
        this.user = res;
        console.debug(res, "user found");
      }, error: err => { console.error(err);}
    });
  }

}

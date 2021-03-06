import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  pass: string = "";
  badPass: boolean = false;
  missing: boolean = false;
  admin: boolean = false;
  student: boolean = false;
  teachers: User[] = [];

  constructor(private userSvc: UsersService, private router: Router, private sysSvc: SystemService) { }

  create(): void {
    if(this.pass === "" ||
      this.user.username === "" ||
      this.user.firstname === "" ||
      this.user.lastname === "" ||
      this.user.email === ""){
        this.missing = true;
        return;
      }
    if(this.pass !== this.user.password){
      this.badPass = true;
      this.user.password = "";
      this.pass = "";
      return;
    }
    this.userSvc.create(this.user).subscribe({
      next: res => {
        console.debug(res, "user created!");
        this.sysSvc.user = res;
        this.router.navigate(["/home"]);
      }, error: err => { console.error(err);}
    });
  }

  ngOnChanges(): void {
    this.student = this.user.isTeacher ? false : true;
  }
  ngOnInit(): void {
    if (this.sysSvc.user === undefined ||
        this.sysSvc.user === null){
          return;
        }
          else if (this.sysSvc.user.isAdmin){
            this.admin = true;
            this.userSvc.getTeachers().subscribe({
              next: res => {
                this.teachers = res;
                console.debug(res, "teachers found!");
              }, error: err => { console.error(err)}
            });
            return;
          }
          else {
            this.userSvc.getTeachers().subscribe({
              next: res => {
                this.teachers = res;
                console.debug(res, "teachers found!");
              }, error: err => { console.error(err)}
            });
            return;
          }
        
    }

  }  



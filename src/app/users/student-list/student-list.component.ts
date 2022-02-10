import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  userNbr: number | undefined;
  students: User[] = [];
  teacher!: User;

  constructor(private userSvc: UsersService,
              private route: ActivatedRoute,
              private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.userNbr = +this.route.snapshot.params["id"];

    this.teacher = this.sysSvc.user;

    this.userSvc.getStudents(this.userNbr).subscribe({
      next: res => {
          this.students = res;
          console.debug(res);
      }, error: err => { console.error(err);}
    });
  }

}

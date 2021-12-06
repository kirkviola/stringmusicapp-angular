import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.sysSvc.isLoggedIn();
  }

}

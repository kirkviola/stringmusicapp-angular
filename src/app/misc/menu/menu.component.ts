import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
  ];

  adminMenu: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/users"),
    new Menu("Activities", "/activities"),
    new Menu("Answers", "/answers"),
    new Menu("My Account", `/users/edit`),
    new Menu("My Activities", "/users/myuser/"),
    new Menu("Problem Models", "/problemmodels"),
    new Menu("Login", "/users/login")
  ];

  userMenu: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("My Account", `/users/edit/`),
    new Menu("My Activities", "/users/myuser"),
    new Menu("Login", "/users/login")
  ];

  defaultMenu: Menu[] = [
    new Menu("Home", "/home"),

  ]

  
  constructor(private sysSvc: SystemService) { }

  ngOnInit(): void {
    this.menus = this.defaultMenu;
  }

}

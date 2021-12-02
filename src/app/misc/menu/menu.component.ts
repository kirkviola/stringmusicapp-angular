import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/users"),
    new Menu("Activities", "/activities"),
    new Menu("Login", "/users/login"),
    new Menu("My Activities", "/users/myuser/:id")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

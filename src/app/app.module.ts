import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { UserloginComponent } from './users/userlogin/userlogin.component';
import { MenuComponent } from './misc/menu/menu.component';
import { MenuItemComponent } from './misc/menu-item/menu-item.component';
import { E404Component } from './misc/e404/e404.component';
import { HomeComponent } from './misc/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserloginComponent,
    MenuComponent,
    MenuItemComponent,
    FormsModule,
    HttpClientModule,
    E404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

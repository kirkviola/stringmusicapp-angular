import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BoolPipePipe } from '../bool-pipe.pipe';
import { HeaderComponent } from '../misc/header/header.component';
import { HomeComponent } from '../misc/home/home.component';
import { MenuComponent } from '../misc/menu/menu.component';
import { MenuItemComponent } from '../misc/menu-item/menu-item.component';



@NgModule({
  declarations: [
    BoolPipePipe,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BoolPipePipe,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuItemComponent
  ]
})
export class SharedModule { }

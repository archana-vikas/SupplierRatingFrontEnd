import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';


import { SupplierComponent } from '../supplier/supplier.component';
import { StarComponent } from '../share/star.component';
import { HttpClientModule } from '@angular/common/http';
import {AddSupplierComponent} from '../supplier/supplierAdd.component';
import {EditUserComponent} from '../user/userEdit.component';
import{EditSupplierComponent} from '../supplier/supplierEdit.component';

import {UserComponent} from '../user/user.component';
import {AddUserComponent} from '../user/userAdd.component';
import{RouterModule,Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,SupplierComponent,StarComponent,AddSupplierComponent,EditSupplierComponent,UserComponent,EditUserComponent,AddUserComponent,
  ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule, AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
}) 
export class AppModule { }

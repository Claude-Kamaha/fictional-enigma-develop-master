import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatTableDataSource } from '@angular/material/table';
import { CustomerListRoutes } from './customer-list.routing';
import { RouterModule } from '@angular/router';
import { Ng2OrderModule} from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CustomerListRoutes),
    CommonModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule

   // BrowserAnimationsModule,
    //BrowserModule
  ]
})
export class CustomerListModule { }

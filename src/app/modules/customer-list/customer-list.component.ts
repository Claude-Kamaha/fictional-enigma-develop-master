import { Component, OnInit,ElementRef,ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerListService } from '../../core/customer-list/customer-list.service';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { CustomerList } from 'app/core/customer-list/customer-list.model';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge,  Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged,takeUntil  } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { SearchComponent } from 'app/layout/common/search/search.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit{
  username: any;
   // customer: Customer[];
   customer: CustomerList[] = [];
   // data:CustomerList[] = [];
    /**
     * Constructor
     *
     * @param {CustomerListService} customerListService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private customerListService: CustomerListService,
        
    ){}
    

 

  ngOnInit(): void {
    {
      this.customerListService.getCustomerDetails().subscribe(
        response => {
          console.log(response);
          console.log(JSON.stringify(response));
          console.log(response);
        this.customer= response.data;
        console.log(this.customer);
       
      }
    
         //this.listCustomer = new MatTableDataSource(list);
    ) 
    }

   
  // this.customerListService.getCustomerDetails();
  
// this.customerListService.getCustomerDetails();
}




Search(){
  if(this.username == ''){
    this.ngOnInit();

  }else{
    this.customer = this.customer.filter(res=>{
      return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
    })
 }
}
  }
  
  //this.listCustomer = new MatTableDataSource(this.customerListService.getCustomerDetails().subscribe(data => this.data=data));
  



import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CustomerList } from './customer-list.model';
import { BehaviorSubject, Observable,of } from 'rxjs';
import { tap, catchError, } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
 

@Injectable({
  providedIn: 'root',})

export class CustomerListService 
{
  token: string;
  constructor(
    private httpClient: HttpClient
  
    ) { 
      this.onCustomerChanged = new BehaviorSubject({});
      this.token = localStorage.getItem('token')
    }

  //private httpclient: HttpClient;
  apiHost = `https://sandbox.nellys-coin.ejaraapis.xyz/api/v1/customer/profile-details`;
  customerlist: CustomerList[];
  onCustomerChanged: BehaviorSubject<any>;
 
    

  
 getCustomerDetails(): Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
    })
  }
  console.log('fetched heroes');
    return this.httpClient.get<any>(this.apiHost, httpOptions)
    .pipe( 
      tap(
        () => console.log('fetched heroes2')),
      catchError(this.handleError<CustomerList[]>('getCustomerDetails', []))
      );
      console.log('fetched heroes2');
 
   

    
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
     console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
    /*
  //step 2
  getCustomerDetails(){
    let req = this.httpClient.get< CustomerList[]>(this.apiHost, this.httpOptions);
    // let res = req.toPromise()
    console.log(this.apiHost);
    
    // .then(res => this.list = res as CustomerList[]);
   
    
  } */

/**
     * Setter & getter for access token
     */
 
}

 

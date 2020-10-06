import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs"
import { map, catchError } from 'rxjs/operators';

import { IPost, IOrder } from '../shared/menu-item';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/data/';

    constructor(private http: HttpClient) { }

    getItems() : Observable<IPost[]> {
       return this.http.get<IPost[]>(this.baseUrl + 'items.json')
           .pipe(
               catchError(this.handleError)
           );
   }

   getItem(id: number) : Observable<IPost> {
     return this.http.get<IPost[]>(this.baseUrl + 'items.json')
       .pipe(
         map(customers => {
           let customer = customers.filter((cust: IPost) => cust.id === id);
           return (customer && customer.length) ? customer[0] : null;
         }),
         catchError(this.handleError)
       )
   }

   getOrders(id: number) : Observable<IOrder[]> {
     return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
       .pipe(
         map(orders => {
           let custOrders = orders.filter((order: IOrder) => order.itemId === id);
           return custOrders;
         }),
         catchError(this.handleError)
       );
   }


    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}

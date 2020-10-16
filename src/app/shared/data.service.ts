import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs"
import { map, catchError } from 'rxjs/operators';
import { GlobalConstants } from '../common/GlobalConstants';

import { IPost, IOrder } from '../shared/menu-item';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/data/';
    Item_page:string = '';
    Order_page:string = '';



    constructor(private http: HttpClient) { }

    getItems() : Observable<IPost[]> {
      if (GlobalConstants.language === 'th')
        this.Item_page = 'items_th.json'
      else if (GlobalConstants.language === 'en')
        this.Item_page = 'items_en.json'

       return this.http.get<IPost[]>(this.baseUrl + this.Item_page)
           .pipe(
               catchError(this.handleError)
           );
   }

   getItem(id: number) : Observable<IPost> {
     if (GlobalConstants.language === 'th')
       this.Item_page = 'items_th.json'
     else if (GlobalConstants.language === 'en')
       this.Item_page = 'items_en.json'

     return this.http.get<IPost[]>(this.baseUrl + this.Item_page)
       .pipe(
         map(customers => {
           let customer = customers.filter((cust: IPost) => cust.id === id);
           return (customer && customer.length) ? customer[0] : null;
         }),
         catchError(this.handleError)
       )
   }

   getOrders(id: number) : Observable<IOrder[]> {
     if (GlobalConstants.language === 'th')
       this.Order_page = 'orders_th.json'
     else if (GlobalConstants.language === 'en')
       this.Order_page = 'orders_en.json'
       
     return this.http.get<IOrder[]>(this.baseUrl + this.Order_page)
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

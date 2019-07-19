import { Injectable } from '@angular/core';
import {  HttpClient }   from '@angular/common/http';

@Injectable({providedIn: "root"})
export class CartService {

  constructor(
    private httpSvc: HttpClient
  ) { }
  items=[];

   addToCart(product){
   this.items.push(product);
  }

   removeItem(product){
  //  theItem = this.items.find(z=>z == item);
  }

   getItems()
  {
    return this.items;
  }

   getShippingPrices()
  {
   return this.httpSvc.get("/assets/shipping.json");

  }
  clearCart()
  {
    this.items = null;
  }

}
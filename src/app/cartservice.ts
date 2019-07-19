import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class CartService {

  constructor() { }
  items=[];

  addToCart(product:any){
   this.items.push(product);
  }

  removeItem(item:any){
  //  theItem = this.items.find(z=>z == item);
  }

  getItems()
  {
    return this.items;
  }

  clearCart()
  {
    this.items = null;
  }

}
import { Injectable } from '@angular/core';

@Injectable({providedIn: "root"})
export class CartServiceService {

  constructor() { }
  items=[];

  addItems(item:any){
   this.items.push(item);
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
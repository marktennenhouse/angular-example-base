import { Component, OnInit } from '@angular/core';
import {CartService } from '../cartservice';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items= [];
  constructor(
    private cartsvc:CartService
  ) {
    this.items = this.cartsvc.getItems();
   }

  ngOnInit() {
  }
 
}
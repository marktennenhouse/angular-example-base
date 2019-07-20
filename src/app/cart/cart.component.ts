import { Component, OnInit } from '@angular/core';
import {CartService } from '../cartservice';
import {FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 items;
 checkoutForm;

  constructor(
    private cartsvc:CartService,
    private formbuilder:FormBuilder
  ) {
    this.items = this.cartsvc.getItems();
    this.checkoutForm = this.formbuilder.group({
      name:"",
      address:""
    })
   }

  onSubmit(customerData)
  {
    console.warn("You order has been submitted");
    this.items = this.cartsvc.clearCart();
    this.checkoutForm.reset();

  }
  ngOnInit() {
  }
 
}
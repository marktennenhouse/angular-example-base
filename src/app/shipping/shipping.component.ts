import { Component, OnInit } from '@angular/core';
import { CartService}  from '../cartservice'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
shippingCosts = [];
  constructor(
    private cartSvc:CartService
  ) { 
  this.shippingCosts = cartSvc.getShippingPrices();
  

  }

  ngOnInit() {
  }

}
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  price: number = 0
  numberDishes: number = 0
  cart: Array<IDishes> = [];

  constructor(private cs: CartService) { }

  addQuantity(id: number) {
    this.cs.addQuantity(id);
    this.price = this.cs.price;
  }
  reduceQuantity(id: number) {
    this.cs.reduceQuantity(id)
    this.price = this.cs.price;
  }

  clearCart() {
    this.cs.clearCart();
    this.cart = this.cs.getCart();
    this.price = this.cs.recentPrice();
  }
  ngOnInit(): void {
    this.cart = this.cs.getCart();
    this.numberDishes = this.cs.newNumber();
    this.price = this.cs.recentPrice();
  }
}

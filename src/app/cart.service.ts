import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  price: number = 0
  numberDishes: number = 0
  cart: Array<IDishes> = [];

  constructor() { }

  addToCart(dish: IDishes) {
    if (this.cart.find((val) => val.name == dish.name)) {
      dish.count += 1;
    } else {
      this.cart.push(dish);
      dish.count = 1;
    }
  }

  getCart() {
    return this.cart;
  }

  addQuantity(dishId: number) {
    this.cart[dishId].count++;
    this.recentPrice();
  }

  reduceQuantity(dishId: number) {
    this.cart[dishId].count--;
    this.recentPrice();
  }

  getQuantityInCart() {
    return this.cart.length;
  }

  newNumber() {
    this.numberDishes = 0
    for (let item of this.cart) {
      this.numberDishes += item.count;
    }
    return this.numberDishes
  }

  recentPrice() {
    this.price = 0
    for (let item of this.cart) {
      this.price += item.price * item.count;
    }
    return this.price
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}

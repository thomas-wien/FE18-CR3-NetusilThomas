import { Component } from '@angular/core';
import { dish, dishes } from '../dishes';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  dishes: Array<IDishes> = dishes;
  dish: IDishes = {} as IDishes;

  constructor(private CS: CartService) { }
  addToCart(obj: IDishes) {
    this.CS.addToCart(obj);
    console.log(this.CS.cart);
  }

}

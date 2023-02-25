import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { dish, dishes } from '../dishes';
import { IDishes } from '../IDishes';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {
  dish: IDishes = {} as IDishes
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private CS: CartService) { }

  addToCart(obj: IDishes) {
    this.CS.addToCart(obj);
    console.log(this.CS.cart);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishID'];
      this.dish = dishes[this.id]
    });
  }
}

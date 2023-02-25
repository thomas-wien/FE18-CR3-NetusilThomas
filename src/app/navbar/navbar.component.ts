import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck, OnInit {
  numberItems: number = 0


  constructor(private cs: CartService) { }

  ngOnInit(): void {
    this.numberItems = this.cs.newNumber();
    console.log(this.numberItems);

  }

  ngDoCheck(): void {
    this.numberItems = this.cs.newNumber();
  }
}

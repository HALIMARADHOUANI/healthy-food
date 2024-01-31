import { FoodService } from './../services/food/food.service';
import { CarttItem } from '../shared/models/cartItem';
import { Cart } from '../shared/models/Carts';
import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
  constructor(private CartService:CartService,private FoodService:FoodService) {
    let foods = FoodService.getAll();
    CartService.addToCart(foods[1]);
    CartService.addToCart(foods[3]);
    CartService.addToCart(foods[4]);


   this.setCart();
   }
 

  ngOnInit(): void {
  }
  removeFromCart(cartItem:CarttItem){
  this.CartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CarttItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.CartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.CartService.getCart();
    
  }

}

import { CarttItem } from 'src/app/shared/models/cartItem';
import { food } from './../../shared/models/Food';
import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Carts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food:food):void{
   let cartItem=this.cart.items.find(item => item.food.id===food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity +1);
      return;
    }
    this.cart.items.push(new CarttItem(food));
  }
  removeFromCart(foodId:number):void{
    this.cart.items=
    this.cart.items.filter(item =>item.food.id !=foodId);
  }
  changeQuantity(foodId:number,quantity:number){
    let cartItem=this.cart.items.find(item =>item.food.id === foodId);
    if(!cartItem)return;
    cartItem.quantity=quantity;

  }
  getCart():Cart{
    return this.cart
  }
}

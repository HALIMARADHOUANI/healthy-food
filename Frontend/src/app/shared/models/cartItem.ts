import { Cart } from 'src/app/shared/models/Carts';
import { food } from "./Food";

export class CarttItem{
    constructor(food:food){
        this.food=food;
       
    }
    food:food;
    quantity:number=1;

    get price():number{
        return this.food.price*this.quantity;
    }
}
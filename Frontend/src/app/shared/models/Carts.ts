import { CarttItem } from "./cartItem";
export class Cart{
    items:CarttItem[]=[];
    get totalPrice():number{
        let totalPrice=0;
        this.items.forEach( item =>{
            totalPrice+= item.price;
        });
        return totalPrice;
    }
}
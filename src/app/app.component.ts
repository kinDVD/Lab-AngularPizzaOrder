import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { menuItem } from './models/myinterface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Chirpus Pizza';
  author: string = 'DVD';
  cart: menuItem[]=[];
  total: number = 0;
  currentMenu: menuItem []= [{
    name: "Cheese",
    category: "Main",
    price: 12,
    quantity: 20,
    vegetarian: true,
    vegan: false,
    soldOut: false
  },
  {
    name: "Pepperoni",
    category: "Main",
    price: 15,
    quantity: 20,
    vegetarian: false,
    vegan: false,
    soldOut: false
  },
  {
    name: "Supreme",
    category: "Main",
    price: 18,
    quantity: 15,
    vegetarian: false,
    vegan: false,
    soldOut: false
  },
  {
    name: "BBQ Chicken",
    category: "Main",
    price: 15,
    quantity: 10,
    vegetarian: false,
    vegan: false,
    soldOut: false
  },
  {
    name: "Meat Lovers",
    category: "Main",
    price: 20,
    quantity: 10,
    vegetarian: false,
    vegan: false,
    soldOut: false
  },
  {
    name: "Classic Margarita",
    category: "Main",
    price: 13,
    quantity: 10,
    vegetarian: true,
    vegan: false,
    soldOut: false
  },
  {
    name: "The Dirty Vegan",
    category: "Main",
    price: 13,
    quantity: 5,
    vegetarian: true,
    vegan: true,
    soldOut: false
  },
  {
    name: "Salad Pie",
    category: "Main",
    price: 10,
    quantity: 10,
    vegetarian: true,
    vegan: true,
    soldOut: false
  },
  {
    name: "Dirty FVking SUPREME",
    category: "Main",
    price: 16,
    quantity: 2,
    vegetarian: true,
    vegan: true,
    soldOut: false
  },
  {
    name: "Chicken Wings",
    category: "Side",
    price: 10,
    quantity: 20,
    vegetarian: false,
    vegan: false,
    soldOut: false
  },
  {
    name: "Tsiqk'n Wings",
    category: "Side",
    price: 15,
    quantity: 2,
    vegetarian: true,
    vegan: true,
    soldOut: false
  },
  {
    name: "Cheese Sticks",
    category: "Side",
    price: 10,
    quantity: 20,
    vegetarian: true,
    vegan: false,
    soldOut: false
  },
  {
    name: "Garlic Knots",
    category: "Main",
    price: 10,
    quantity: 20,
    vegetarian: true,
    vegan: false,
    soldOut: false
  },
  {
    name: "Deez Knots",
    category: "Main",
    price: 12,
    quantity: 5,
    vegetarian: true,
    vegan: true,
    soldOut: false
  }
];
addOrder(i:menuItem, total: number):void{
    this.cart.push(i);
    if(i.quantity > 0){
    i.quantity -= 1;
    }
    else{
      i.soldOut = true;
    }
    this.countCart(total);
}
countCart(total:number):number{
  this.cart.forEach(i => {
    total += i.price;
    console.log(total)
  });
  return total;
}

}



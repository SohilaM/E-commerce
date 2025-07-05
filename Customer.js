"use strict";
import { Product } from "./Product.js";
import { ShippableProduct } from "./shippableProduct.js";
import { ExpirableProduct } from "./expirableProduct.js";
import { ExpirableShippableProduct } from "./expirableShippableProduct.js";
import { Cart } from "./cart.js";

export class Customer {
  cart = [];
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  getName() {
    return this.name;
  }
  getBalance() {
    return this.balance;
  }
}

const Sohila = new Customer("Sohila Mostafa", 1000);
console.log(Sohila);
console.log(Sohila.getBalance());

const cheese = new ExpirableShippableProduct("Cheese", 10, 10, 1, "1/1/2026");

const c = new Cart(Sohila);
c.add(cheese, 2);
console.log(c.cart);

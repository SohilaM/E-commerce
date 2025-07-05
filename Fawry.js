"use strict";
import { Product } from "./Product.js";
import { Cart } from "./cart.js";
import { ShippableProduct } from "./shippableProduct.js";
import { ExpirableProduct } from "./expirableProduct.js";

class Customer {
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

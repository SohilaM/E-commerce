"use strict";
import { Product } from "./Product.js";
import { ShippableProduct } from "./shippableProductClass.js";
import { ExpirableProduct } from "./expirableProductClass.js";
import { ExpirableShippableProduct } from "./expirableShippableProduct.js";
import { Cart } from "./cart.js";
import { checkout } from "./func.js";

export class Customer {
  cart = [];
  constructor(name, balance) {
    this._name = name;
    this._balance = balance;
  }

  getName() {
    return this._name;
  }
  getBalance() {
    return this._balance;
  }
  editBalance(balance) {
    this._balance -= balance;
  }
}

const customer = new Customer("Sohila Mostafa", 10000);

const cheese = new ExpirableShippableProduct(
  "Cheese",
  10,
  10,
  100,
  "2026-01-01"
);
const biscuits = new ExpirableShippableProduct(
  "Biscuits",
  10,
  10,
  100,
  "2026-01-01"
);
const tv = new ShippableProduct("TV", 500, 10, 1000);
const scratchCard = new Product("Scratch Card", 1, 10);

const cart = new Cart(customer);
cart.add(cheese, 2);
cart.add(tv, 3);
cart.add(scratchCard, 1);
checkout(customer, cart);

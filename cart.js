"use strict";
import { Customer } from "./Customer.js";
import { ShippableProduct } from "./shippableProduct.js";
import { ExpirableShippableProduct } from "./expirableShippableProduct.js";
import { ExpirableProduct } from "./expirableProduct.js";

export class Cart {
  cart = [];
  constructor(customer) {
    this.customer = customer;
  }
  add(product, quantity) {
    if (
      (typeof product.isExpired !== "function" || !product.isExpired()) &&
      product.isAvailable(quantity) &&
      this.customer.getBalance() >= quantity * product.getPrice()
    ) {
      this.cart.push({
        product,
        quantity,
      });
      this.customer.editBalance(quantity * product.getPrice);
      product.editQuantity(quantity);
    }
    if (!product.isAvailable(quantity)) {
      console.log(`Insufficient quantity!`);
      return;
    }
    if (this.customer.getBalance() < quantity * product.getPrice()) {
      console.log("Insufficient balance!");
      return;
    }
    if (typeof product.isExpired == "function" && product.isExpired()) {
      console.log(`${product.getName()} expired`);
      return;
    }
  }
}

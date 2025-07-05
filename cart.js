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
      product.isAvailable(quantity) &&
      this.customer.getBalance() >= quantity * product.getPrice()
    ) {
      this.cart.push({
        product,
        quantity,
      });
    }
  }
}

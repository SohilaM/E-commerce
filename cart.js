"use strict";
import { Product } from "./Product.js";

export class Cart {
  cart = [];
  add(product, quantity) {
    if (
      product.isAvailable() &&
      quantity * product.price <= this.getBalance()
    ) {
      this.cart.push({
        product,
        quantity,
      });
    }
  }
}

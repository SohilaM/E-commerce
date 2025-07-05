"use strict";

export class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  getName() {
    return this.name;
  }
  getPrice() {
    return this.price;
  }
  getQuantity() {
    return this.quantity;
  }

  isAvailable(reqQuantity) {
    return this.quantity >= reqQuantity;
  }
}

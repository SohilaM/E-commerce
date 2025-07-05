"use strict";
import { Product } from "./Product";

export class ShippableProduct extends Product {
  constructor(name, price, quantity, weight) {
    super(name, price, quantity);
    this.weight = weight;
  }

  getWeight() {
    return this.weight;
  }
}

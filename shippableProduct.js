"use strict";
import { Product } from "./Product.js";

export const ShippableProduct = (Base) =>
  class extends Product {
    constructor(name, price, quantity, weight) {
      super(name, price, quantity);
      this.weight = weight;
    }

    getWeight() {
      return this.weight;
    }
  };

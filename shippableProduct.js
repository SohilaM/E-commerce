"use strict";
import { Product } from "./Product.js";

export const ShippableProduct = (Base) =>
  class extends Base {
    constructor(name, price, quantity, weight, ...rest) {
      super(name, price, quantity, ...rest);
      this.weight = weight;
    }

    getWeight() {
      return this.weight;
    }
  };

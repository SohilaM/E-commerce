"use strict";
import { Product } from "./Product.js";

export const ExpirableProduct = (Base) =>
  class extends Product {
    constructor(name, price, quantity, expiryDate) {
      super(name, price, quantity);
      this.expiryDate = expiryDate;
    }

    isExpired() {
      return new Date() > this.expiryDate;
    }
  };

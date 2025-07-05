"use strict";
import { Product } from "./Product.js";

export const ExpirableProduct = (Base) =>
  class extends Base {
    constructor(name, price, quantity, weight, expiryDate, ...rest) {
      super(name, price, quantity, weight, ...rest);
      this.expiryDate = new Date(expiryDate);
    }

    isExpired() {
      return new Date() > this.expiryDate;
    }
  };

"use strict";

export class ExpirableProduct extends Product {
  constructor(name, price, quantity, expiryDate) {
    super(name, price, quantity);
    this.expiryDate = expiryDate;
  }

  isExpired() {
    return new Date() > this.expiryDate;
  }
}

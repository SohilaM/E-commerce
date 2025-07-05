import { ExpirableProduct } from "./expirableProduct.js";
import { ShippableProduct } from "./shippableProduct.js";
import { Product } from "./Product.js";

export class ExpirableShippableProduct extends ExpirableProduct(
  ShippableProduct(Product)
) {
  constructor(name, price, quantity, weight, expiryDate) {
    super(name, price, quantity, weight, expiryDate);
  }
}

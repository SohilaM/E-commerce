import { Product } from "./Product.js";
import { ShippableProduct as ShippableMixin } from "./shippableProduct.js";
import { ExpirableProduct as ExpirableMixin } from "./expirableProduct.js";

export class ExpirableShippableProduct extends ExpirableMixin(
  ShippableMixin(Product)
) {
  constructor(name, price, quantity, weight, expiryDate) {
    super(name, price, quantity, weight, expiryDate);
  }
}

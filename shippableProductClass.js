import { Product } from "./Product.js";
import { ShippableProduct as ShippableMixin } from "./shippableProduct.js";

export class ShippableProduct extends ShippableMixin(Product) {}

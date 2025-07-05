import { Product } from "./Product.js";
import { ExpirableProduct as ExpirableMixin } from "./expirableProduct.js";

export class ExpirableProduct extends ExpirableMixin(Product) {}

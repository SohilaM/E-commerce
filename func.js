import { ShippableProduct } from "./shippableProductClass.js";
import { ExpirableProduct } from "./expirableProductClass.js";
import { ExpirableShippableProduct } from "./expirableShippableProduct.js";

export const checkout = function (customer, cart) {
  if (cart.length === 0) {
    console.log(`Cart is empty`);
    return;
  }
  let totalPackageWeight = 0;
  let subTotal = 0;
  const shipping = 30;

  console.log(`** Shipment Notice **`);
  cart.cart.forEach((product) => {
    if (
      product.product instanceof ExpirableShippableProduct ||
      product.product instanceof ShippableProduct
    ) {
      const weight = product.quantity * product.product.getWeight();
      totalPackageWeight += weight;
      console.log(
        `${product.quantity}x ${product.product.getName()}    ${weight}g`
      );
    }
  });
  console.log(`Total package weight ${totalPackageWeight / 1000}kg`);

  console.log(`** Checkout receipt **`);
  cart.cart.forEach((product) => {
    if (
      product.product instanceof ExpirableShippableProduct ||
      product.product instanceof ShippableProduct
    ) {
      const price = product.quantity * product.product.getPrice();
      subTotal += price;
      console.log(
        `${product.quantity}x ${product.product.getName()}    ${price}`
      );
    }
  });
  const amount = subTotal + shipping;
  console.log(`----------------------`);
  console.log(`Subtotal         ${subTotal} `);
  console.log(`Shipping         ${shipping}`);
  console.log(`Amount         ${amount}`);
};

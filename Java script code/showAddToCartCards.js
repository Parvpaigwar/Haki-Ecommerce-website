import products from"./api/prodcuts.json";
import { fetchQuantityFromCarts } from "./fetchQuantityFromCarts";
import { getCartProductsFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdcutFromCart } from "./removeProdcutFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductsFromLS();

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});


console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");


const showCartProduct = () => {
    filterProducts.forEach((curProd) =>{
        const { category,id ,image ,name,price,stock} = curProd;


        let productClone = document.importNode(templateContainer.content,true);
        const lSActualData = fetchQuantityFromCarts(id, price)

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;

        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;

    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdcutFromCart(id));

    console.log(cartElement);
    cartElement.appendChild(productClone);
  });
};

showCartProduct();

updateCartProductTotal()
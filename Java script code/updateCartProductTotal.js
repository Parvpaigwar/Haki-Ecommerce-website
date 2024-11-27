import { getCartProductsFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let tax = document.querySelector(".productTax");

    let arrLocalStorageProduct = getCartProductsFromLS();
    let intialValue = 0;
    let totalProductPrice = arrLocalStorageProduct.reduce((accum,curElem,) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    },intialValue);
    // console.log(totalProductPrice);

    productSubTotal.textContent = `₹${totalProductPrice.toFixed(2)}`;
    productFinalTotal.textContent = `₹${(Number(totalProductPrice + ((totalProductPrice*12)/100))).toFixed(2)}`
    tax.textContent = `₹${((totalProductPrice*12)/100).toFixed(2)}`
};
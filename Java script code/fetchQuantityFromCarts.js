import { getCartProductsFromLS } from "./getCartProducts"

export const fetchQuantityFromCarts = (id,price) => {
    let cartProducts = getCartProductsFromLS();

    let existingProduct = cartProducts.find((curProd) => curProd.id === id);

    let quantity = 1;
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }

    return {quantity, price};
}
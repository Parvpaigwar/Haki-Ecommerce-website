import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";


export const removeProdcutFromCart = (id) => {
    let cartProducts = getCartProductsFromLS();
    // console.log(id);
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
    
    localStorage.setItem('cartProductsLS', JSON.stringify(cartProducts));

    showToast("remove", id); // Call before removing DOM element

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        console.log(id);
    }

    updateCartValue(cartProducts);
    updateCartProductTotal();
};

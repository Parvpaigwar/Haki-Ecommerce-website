import { getCartProductsFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


getCartProductsFromLS();

export const addToCart = (event,id,stock) => {
    let arrLocalStorageProduct = getCartProductsFromLS();



     
    const currentProductElem = document.querySelector(`#card${id}`);

    let quantity = currentProductElem.querySelector(".productQuantity").innerText;
    let price = currentProductElem.querySelector(".productPrice").innerText;


    price = price.replace("₹","");

    let existingProd = arrLocalStorageProduct.find((currpro) => currpro.id === id) ;

    if(existingProd && quantity > 1){
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price*quantity);
        let uppdatedCart = {id, quantity, price};

        uppdatedCart = arrLocalStorageProduct.map((curprod) => {
            showToast("add",id);
            return curprod.id === id ? uppdatedCart : curprod;
        });
        console.log(uppdatedCart);
        
        localStorage.setItem('cartProductsLS',JSON.stringify(uppdatedCart));

    }
    if(existingProd){
        // alert("Bhai pehle se hai")
        return false;
    }

    price = Number(price*quantity);
    quantity = Number(quantity);

    
    arrLocalStorageProduct.push({id,quantity,price});
    localStorage.setItem('cartProductsLS',JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);
    showToast("add",id);

};

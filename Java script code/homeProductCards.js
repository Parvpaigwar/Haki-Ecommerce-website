import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productConatiner = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

export const showProductContainer = (products) => {
    if(!products){
        return false;
    }
    products.forEach(element => {
        const {brand, category, description,id ,image ,name,price,stock} = element;

        const productClone = document.importNode(productTemplate.content,true);
        // # we copy the template as a clone now we just fill the values and append it
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name; // same as innertext
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productImage").alt = name;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${4*price}`;
        productClone.querySelector(".productStock").textContent = stock;

        productClone.querySelector(".stockElement").addEventListener("click",(event) =>{
            homeQuantityToggle(event,id,stock);
        });

    productClone.querySelector(".add-to-cart-button").addEventListener("click",() => {
        addToCart(event,id,stock);
    });
        productConatiner.append(productClone);
    });
    
};

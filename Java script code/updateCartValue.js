const cartValue = document.querySelector("#cartValue");


export const updateCartValue = (cartproducts) => {
    return cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cartproducts.length} </i>`
};
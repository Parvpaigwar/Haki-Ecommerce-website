
export const showToast = (operation,id) => {
    const toast = document.createElement("div");
    toast.classList.add("toast");
        
    const product = document.querySelector(`#card${id}`);

    let name = product.querySelector(".productName").innerText;

    if (operation === "add") {
        toast.textContent = ` ${name} has been added.`;
    } else {
        toast.textContent = ` ${name} has been deleted.`;
    }

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
};
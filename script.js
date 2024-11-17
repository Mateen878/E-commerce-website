let cart = [];

document.addEventListener("DOMContentLoaded", function() {
  const products = document.querySelectorAll(".products li");
  const cartList = document.getElementById("cart-list");
  const totalPriceElement = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    product.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const productData = {
          name: product.querySelector("h3").textContent,
          price: parseFloat(product.querySelector("p").textContent.replace("$", "")),
          image: product.querySelector("img").src,
        };
        cart.push(productData);
        updateCart();
      }
    });
  });

  checkoutBtn.addEventListener("click", () => {
    alert("Checkout functionality not implemented yet!");
  });

  function updateCart() {
    cartList.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((item) => {
      const cartItem = document.createElement("li");
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
        <button>Remove</button>
      `;
      cartList.appendChild(cartItem);
      totalPrice += item.price;
    });
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }
});
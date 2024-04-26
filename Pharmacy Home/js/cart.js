// Function to delete product
function deleteProduct(button) {
  const productItem = button.closest(".product-item");
  const productName = productItem.querySelector("h3").textContent.trim();

  // Remove the product from the stored cart in localStorage
  let storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Find the index of the product to delete
  const indexToDelete = storedCart.findIndex(
    (product) => product.name === productName
  );

  if (indexToDelete !== -1) {
    // Remove the product from the cart array
    storedCart.splice(indexToDelete, 1);

    // Update localStorage with the modified cart
    localStorage.setItem("cart", JSON.stringify(storedCart));

    // Remove the product from the displayed cart on the page
    productItem.remove();

    // Update totals after deletion
    updateTotals();

    // Update cart count
    updateCartCount();
  }
}

// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear previous content

  const storedCart = JSON.parse(localStorage.getItem("cart"))  || [];
  if (storedCart.length === 0) {
    cartItemsContainer.innerHTML = "<p>No items in the cart</p>";
    return;
  }

  storedCart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<div class="product-item" data-product-id="1">
            <div class="col-md-3"><img src="${product.image}" alt="${product.name}"></div>
            <div class="col-md-4"><h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p></div>
            <div class="col-md-2">
              <div class="input-group quantity">
                <input type="number" class="form-control quantity-input" value="1" min="1">
              </div>
            </div>
            <div class="col-md-3">
              <p class="product-total">${product.price}</p>
              <span class="delete-btn" style="margin-top: -23px; border: 1px solid black;" onclick="deleteProduct(this)">X</span>
            </div>
          </div>`;
    cartItemsContainer.appendChild(cartItem);
  });

  // Call the function to set up event listeners for quantity inputs
  updateTotalOnQuantityChange();

  // Update cart count
  updateCartCount();
}

// Function to update totals when quantity changes
function updateTotalOnQuantityChange() {
  document.querySelectorAll(".quantity-input").forEach((input) => {
    input.addEventListener("change", () => {
      const item = input.closest(".product-item");
      const price = parseFloat(
        item.querySelector(".price").innerText.replace(" EGP", "")
      );
      const quantity = parseInt(input.value);
      const total = price * quantity;
      item.querySelector(".product-total").innerText =
        total.toFixed(2) + " EGP";

      // Update totals
      updateTotals();
    });
  });
}

// Function to update cart count
function updateCartCount() {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = storedCart.length;
  document.querySelector("#cartItems").innerText = cartCount;
}

// Function to update totals
function updateTotals() {
  let subtotal = 0;
  document.querySelectorAll(".product-item").forEach((item) => {
    const price = parseFloat(
      item.querySelector(".price").innerText.replace(" EGP", "")
    );
    const quantity = parseInt(item.querySelector(".quantity-input").value);
    const total = price * quantity;
    subtotal += total;
  });

  const shipping = 5.0;
  const total = subtotal + shipping;

  // Update totals on the page
  document.getElementById("subtotal").innerText = subtotal.toFixed(2) + " EGP";
  document.getElementById("shipping").innerText = shipping.toFixed(2) + " EGP";
  document.getElementById("cart-total").innerText = total.toFixed(2) + " EGP";
}
// Call the function to display cart items when the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  displayCartItems();
});

// Call the function to update totals
updateTotals();

// Sample Product Data 
const productsData = [
    {
        id: 1,
        name: "Dolipran",
        category: "Medicine",
        image: "images/333.jpg",
        description: "description",
        price: "19 EGP",
         
    },
    {
        id: 2,
        name: "B-cor",
        category: "Medicine",
        image: "images/1.jpg",
        description: "description",
        price: "19 EGP",
         
    },
    {
        id: 3,
        name: "Cataflam",
        category: "Medicine",
        image: "images/7.jpeg",
        description: "description",
        price: "19 EGP",
         
        
    },
    {
        id: 4,
        name: "Nuzartan",
        category: "Medicine",
        image: "images/4.jpg",
        description: "description",
        price: "19 EGP",
         
    },
    {
        id: 5,
        name: "Diltiazem",
        category: "Medicine",
        image: "images/3.jpg",
        description: "description",
        price: "19 EGP",
         
    },
    {
        id: 6,
        name: "Catafast",
        category: "Medicine",
        image: "images/8.jpg",
        description: "description",
        price: "19 EGP",
         
    },
    {
        id: 7,
        name: "Maybelline",
        category: "Make up",
        image: "images/88.jpg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 8,
        name: "Foundation",
        category: "Make up",
        image: "images/cc.jpg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 9,
        name: "Rare Beauty",
        category: "Make up",
        image: "images/d.jpg",
        description: "description",
        price: "24 EGP",
         
    },

{
        id: 10,
        name: "La Roche Posay",
        category: "Skincare Product",
        image: "images/p.jpg",
        description: "description",
        price: "14 EGP",
         
    },
    {
        id: 11,
        name: "Clean&Clear",
        category: "Skincare Product",
        image: "images/11.png",
        description: "description",
        price: "14 EGP",
         
    },
    {
        id: 12,
        name: "Vichy",
        category: "Skincare Product",
        image: "images/33.png",
        description: "description",
        price: "14 EGP",
         
    },
    {
        id: 13,
        name: "North For Men",
        category: "Men Product",
        image: "images/6.jpeg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 14,
        name: "Marbele",
        category: "Men Product",
        image: "images/9.jpeg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 15,
        name: "Hair Remover",
        category: "Men Product",
        image: "images/101.jpg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 16,
        name: "Shampoo",
        category: "Hair Product",
        image: "images/55.png",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 17,
        name: "Bless",
        category: "Hair Product",
        image: "images/555.jpg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 18,
        name: "Clary",
        category: "Hair Product",
        image: "images/b.jpg",
        description: "description",
        price: "24 EGP",
         
    },

    {
        id: 19,
        name: "Sanosan",
        category: "Baby Essentials",
        image: "images/77.png",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 20,
        name: "Gohnsons",
        category: "Baby Essentials",
        image: "images/5.jpg",
        description: "description",
        price: "24 EGP",
         
    },
    {
        id: 21,
        name: "Sudocream",
        category: "Baby Essentials",
        image: "images/88.png",
        description: "description",
        price: "24 EGP",
         
    },

  
];
// Function to update cart count

function updateCartCount() {
const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = storedCart.length;
document.querySelector("#cartItems").innerText = cartCount;
}
document.addEventListener("DOMContentLoaded", function() {
updateCartCount();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
// let addproduct = document.querySelector("#addproduct");
// Function to render products
function renderProducts(products) {
const productsContainer = document.getElementById("products");
productsContainer.innerHTML = "";
products.forEach(product => {
const productCard = `
<div class="product" data-id="${product.id}" data-name="${product.name}" data-image="${product.image}" data-description="${product.description}" data-price="${product.price}">
    <a href="" target="_blank"><img src="${product.image}" alt="${product.name}"></a>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <p class="price">${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
</div>`;
productsContainer.innerHTML += productCard;
});

// Add event listener to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
button.addEventListener("click", () => {
    const productId = parseInt(button.parentNode.getAttribute("data-id"));
    const selectedProduct = productsData.find(product => product.id === productId);
    if (selectedProduct) {
        button.textContent = "Added"; // Change button text to "Added"
        // addproduct.innerHTML=localStorage.getItem("cart")
        button.classList.add("added"); // Add 'added' class for styling
        button.disabled = true; // Disable button after adding to cart
        addToCart(selectedProduct); // Add selected product to cart
        updateCartUI(); // Update UI to show product as added
        saveCartToLocalStorage(); // Save updated cart to local storage
        updateCartCount(); 
        updateCartUI();
         }
    });
      });
   }
function addToCart(product) {
cart.push(product); // Add product to cart array
updateCartCount();
}


// Load cart from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
loadCartFromLocalStorage();
updateCartUI();
});


// Function to load cart from localStorage
function loadCartFromLocalStorage() {
const storedCart = localStorage.getItem("cart");
if (storedCart) {
cart = JSON.parse(storedCart);
}
}

// Function to update UI based on the items in the cart
function updateCartUI() {
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
const productId = parseInt(button.parentNode.getAttribute("data-id"));
const inCart = cart.some(product => product.id === productId);
if (inCart) {
    button.textContent = "Added";
    button.classList.add("added");
    button.disabled = true;
}
}); 
}
function saveCartToLocalStorage() {
localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to local storage
}
console.log(localStorage.getItem('cart'))

renderProducts(productsData);

const categoryItems = document.querySelectorAll("#product-categories li");
categoryItems.forEach(item => {
item.addEventListener("click", () => {
categoryItems.forEach(el => el.classList.remove("active"));
item.classList.add("active");
const category = item.getAttribute("data-filter");
const filteredProducts = category === "all" ? productsData : productsData.filter(product => product.category === category);
renderProducts(filteredProducts);
});
});





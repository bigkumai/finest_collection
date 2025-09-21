
const products = [
 
  { id: 1, name:"CREAM/BROWN/RED </br> SOFT,STYLIST,AND BREATHABLE-OUR BEDSHEETS TURN EVERY NIGHT INTO A LUXURY SLEEP EXPERIENCE",  category: "Bed sheet", price: 1.99, rating: 4.5, image: "IMG/img-1.jpg" },
   { id: 6, name: "LIGHT GREEN/FLOWERS </br> SOFT,STYLIST,AND BREATHABLE-OUR BEDSHEETS TURN EVERY NIGHT INTO A LUXURY SLEEP EXPERIENCE", category: "Bed sheet", price: 20.00, rating: 4.3, image: "IMG/img-2.jpg" },
  { id: 7, name: "GREEN/GOLD </BR> SOFT,STYLIST,AND BREATHABLE-OUR BEDSHEETS TURN EVERY NIGHT INTO A LUXURY SLEEP EXPERIENCE", category: "Bed sheet", price: 2.00, rating: 4.3, image: "IMG/img-3.jpg" },
  { id: 7, name: "PINK </BR> SOFT,STYLIST,AND BREATHABLE-OUR BEDSHEETS TURN EVERY NIGHT INTO A LUXURY SLEEP EXPERIENCE", category: "Bed sheet", price: 2.00, rating: 4.3, image: "IMG/img-4.jpg" },
  { id: 2, name: "BLUE</br>DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z1.PNG" },
   { id: 2, name: "DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z2.PNG" },
    { id: 2, name: "DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z3.JPG" },
     { id: 2, name: "DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z4.JPG" },
      { id: 2, name: "DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z5.JPG" },
       { id: 2, name: "DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z6.JPG" },
        { id: 2, name: "DURABLE MOP BUCKET AND STURDY STAND DESIGNED FOR WRINGING, LESS EFFORT AND SPOTLESS CLEAN EVERYTIME", category: "Mop bucket/Standing mop", price: 12.99, rating: 4.2, image: "IMG/Z7.JPG" },
  { id: 3, name: "MAXIMIZE YOUR SPACE WITH SLEEK CORNER SHELVES - STYLIST,STUDY,AND PERFECT FOR DISPLAYING OR STORING WITH EASE", category: "shelve", price: 59.99, rating: 4.6, image: "https://via.placeholder.com/100?text=Headphones" },
  { id: 4, name: "COMFORT MEET STYLE. OUR KITCHEN MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU COOK ", category: "Kitchen mat", price: 25.00, rating: 4.0, image: "IMG/x1.JPG" },
    { id: 4, name: "COMFORT MEET STYLE. OUR KITCHEN MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU COOK ", category: "Kitchen mat", price: 25.00, rating: 4.0, image: "IMG/x2.JPG" },
      { id: 4, name: "COMFORT MEET STYLE. OUR KITCHEN MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU COOK ", category: "Kitchen mat", price: 25.00, rating: 4.0, image: "IMG/x3.WEBP" },
  { id: 5, name: "KITCHEN </BR> MAKE YOUR ROOM VERY ORGANIZED WITH THESE STORAGE RACKS ITS VERY QUALITY AND IT MAKES YOUR ROOM FEEL SPACIOUS", category: "Storage rack", price: 8.50, rating: 4.7, image: "IMG/T1.JPG" },
  { id: 6, name: "SHOE</br>MAKE YOUR ROOM VERY ORGANIZED WITH THESE STORAGE RACKS ITS VERY QUALITY AND IT MAKES YOUR ROOM FEEL SPACIOUS", category: "Storage rack", price: 20.00, rating: 4.3, image: "IMG/T2.JPG" },
  { id: 6, name: "LIVING ROOM</br> MAKE YOUR ROOM VERY ORGANIZED WITH THESE STORAGE RACKS ITS VERY QUALITY AND IT MAKES YOUR ROOM FEEL SPACIOUS", category: "Storage rack", price: 20.00, rating: 4.3, image: "IMG/T3.JPG" },
    { id: 6, name: "SHOE</br> MAKE YOUR ROOM VERY ORGANIZED WITH THESE STORAGE RACKS ITS VERY QUALITY AND IT MAKES YOUR ROOM FEEL SPACIOUS", category: "Storage rack", price: 20.00, rating: 4.3, image: "IMG/T4.JPG" },
      { id: 6, name: "SHOE </br> MAKE YOUR ROOM VERY ORGANIZED WITH THESE STORAGE RACKS ITS VERY QUALITY AND IT MAKES YOUR ROOM FEEL SPACIOUS", category: "Storage rack", price: 20.00, rating: 4.3, image: "IMG/T5.JPG" },
        { id: 6, name: "SHOE </BR>MAKE YOUR ROOM VERY ORGANIZED WITH THESE STORAGE RACKS ITS VERY QUALITY AND IT MAKES YOUR ROOM FEEL SPACIOUS", category: "Storage rack", price: 20.00, rating: 4.3, image: "IMG/T6.JPG" },
 
   { id: 10, name: "BLUE </br> FOR INDOOR AND OUTDOOR DRYING OF CLOTHES,MAKE IT EASY AND CONVENIENT ", category: "Dry line", price: 1.00, rating: 4.3, image: "IMG/q1.JPG" },
    { id: 10, name: "RED/ASH </br> FOR INDOOR AND OUTDOOR DRYING OF CLOTHES,MAKE IT EASY AND CONVENIENT", category: "Dry line", price: 1.00, rating: 4.3, image: "IMG/q2.JPG" },
     { id: 10, name: " RED/SILVER</br> FOR INDOOR AND OUTDOOR DRYING OF CLOTHES,MAKE IT EASY AND CONVENIENT", category: "Dry line", price: 1.00, rating: 4.3, image: "IMG/q3.WEBP" },
    { id: 11, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E2.jpg" },
     { id: 12, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E3.jpg" },
      { id: 13, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E4.jpg" },
       { id: 14, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E5.jpg" },
        { id: 15, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E6.jpg" },
         { id: 16, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E7.jpg" },
          { id: 17, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E8.jpg" },
           { id: 18, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E9.jpg" },
            { id: 19, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E10.jpg" },
             { id: 20, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E11.jpg" },
              { id: 21, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E12.jpg" },
               { id: 22, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E13.jpg" },
                { id: 23, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E14.jpg" },
                 { id: 24, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E15.jpg" },
                  { id: 25, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E16.jpg" },
                   { id: 26, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E17.jpg" },
                    { id: 27, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E18.jpg" },
                     { id: 28, name: "ONE HEAVY DUVET, ONE BEDSHEET, FOUR PILLOWCASE AND ONE THROW PILLOWCASE", category: "Duvet", price: 1.00, rating: 4.3, image: "IMG/E19.jpg" },
       
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N1.WEBP" },
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N2.JPG" },
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N3.JPG" },
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N4.JPG" },
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N5.JPG" },
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N6.JPG" },
      { id: 30, name: "COMFORT MEET STYLE. OUR BATHROOM MAT KEEP YOUR FEET CUSHIONED AND YOUR FLOOR SPOTLESS WHILE YOU BATH ", category: "Bathroom mat", price: 1.00, rating: 4.3, image: "IMG/N7.JPG" },
       { id: 31, name: "RED PLUFFY", category: "Pluffy Duvet", price: 1.00, rating: 4.3, image: "IMG/P1.jpg" },
        { id: 32, name: "YELLOW PLUFFY", category: "Pluffy Duvet", price: 1.00, rating: 4.3, image: "IMG/P2.jpg" },
        { id: 33, name: "CREAM PLUFFY", category: "Pluffy Duvet", price: 1.00, rating: 4.3, image: "IMG/P3.jpg" },
         { id: 34, name: "WHITE PLUFFY", category: "Pluffy Duvet", price: 1.00, rating: 4.3, image: "IMG/P4.jpg" },
 { id: 35, name: "ASH PLUFFY", category: "Pluffy Duvet", price: 1.00, rating: 4.3, image: "IMG/P5.jpg" },
 { id: 36, name: "GREEN ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M1.jpg" },
  { id: 37, name: "YELLOW ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M2.jpg" },
   { id: 38, name: "RED ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M3.jpg" },
 { id: 39, name: "CREAM ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M4.jpg" },
 { id: 40, name: "WINE", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M5.jpg" },
 { id: 41, name: "ORANGE ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M6.jpg" },
  { id: 42, name: "DEEP WINE ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M7.jpg" },
{ id: 42, name: "BLACK/ASH ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M8.jpg" },
{ id: 42, name: "CREAM/BROWN ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M9.jpg" },
{ id: 42, name: "WHITE/CREAM ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M10.jpg" },
{ id: 42, name: "DEEP PINK/LIGHT PINK ", category: "Pluffy center mat", price: 1.00, rating: 4.3, image: "IMG/M11.jpg" },
   { id: 43, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C1.jpg" },
  { id: 44, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C2.jpg" },
  { id: 45, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C3.jpg" },
  { id: 46, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C4.jpg" },
  { id: 47, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE ", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C5.jpg" },
  { id: 48, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE ", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C6.jpg" },
  { id: 49, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE ", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C7.jpg" },
   { id: 50, name: "MAKE YOUR LIVING ROOM LOOK OUTSTANDING WITH THIS CENTER MAT,VERY QUALITY AND ATTRACTIVE ", category: "Center mat", price: 1.00, rating: 4.3, image: "IMG/C8.jpg" },
 { id: 51, name: "ASH </br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L1.jpg" },
 { id: 52, name: "DEEP GREEN </br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L2.jpg" },
 { id: 50, name: "PINK</br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L3.jpg" },
 { id: 50, name: "GREEN WITH FLOWERS</br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT ", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L4.jpg" },
 { id: 50, name: "ASH </br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L5.jpg" },
  { id: 50, name: "ASH/YELLOW/WHITE</br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L6.jpg" },
   { id: 50, name: "CREAM WITH WHITE/RED</br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT ", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L7.jpg" },
 { id: 50, name: "DEEP BLUE </br> PROTECT YOUR BED FROM LIQUID STAINS TO INCREASE THE LIFE SPAN OF YOUR BED AND ALWAYS LOOK NEW AND NEAT ", category: "Mattress protector", price: 1.00, rating: 4.3, image: "IMG/L8.jpg" },
 { id: 50, name: "MAXIMIZE YOUR SPACE WITH SLEEK CORNER SHELVES - STYLIST,STUDY,AND PERFECT FOR DISPLAYING OR STORING WITH EASE ", category: "Cornershelve", price: 1.00, rating: 4.3, image: "IMG/y1.JPG." },
{ id: 50, name: "MAXIMIZE YOUR SPACE WITH SLEEK CORNER SHELVES - STYLIST,STUDY,AND PERFECT FOR DISPLAYING OR STORING WITH EASE ", category: "Cornershelve", price: 1.00, rating: 4.3, image: "IMG/y2.JPG." },
{ id: 50, name: "MAXIMIZE YOUR SPACE WITH SLEEK CORNER SHELVES - STYLIST,STUDY,AND PERFECT FOR DISPLAYING OR STORING WITH EASE", category: "Cornershelve", price: 1.00, rating: 4.3, image: "IMG/y3.JPG." },


 
]; 

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderProducts(filter = "All") {
  const container = document.getElementById("products");
 
 container.innerHTML = "";
  products
    .filter(p => filter === "All" || p.category === filter)
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₵${p.price.toFixed(2)}</p>
        <p>${"⭐".repeat(Math.round(p.rating))} ${p.rating.toFixed(1)}</p>
        <button onclick="addToCart(${p.id})">Add to cart</button>
      `;
      container.appendChild(div);
    });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart();
  updateCartCount();
  alert(product.name + " added to cart!");
}

function updateCartCount() {
  document.getElementById("cartCount").textContent =
    cart.reduce((a, b) => a + b.qty, 0);
}

function filterCategory(cat) {
  renderProducts(cat);
}

// Render Cart Items in Modal
function renderCartItems() {
  const container = document.getElementById("cartItems");
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty</p>";
    return;
  }
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name} - ₵${item.price.toFixed(2)} x ${item.qty}</span>
    `;
    container.appendChild(div);
  });
}

// Render Confirmation Items
function renderConfirmItems() {
  const container = document.getElementById("confirmItems");
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = "<p>No items</p>";
    return;
  }
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <span>${item.name} - ₵${item.price.toFixed(2)} x ${item.qty}</span>
    `;
    container.appendChild(div);
  });
}

// Checkout Modal Steps
const modal = document.getElementById("checkoutModal");
const steps = {
  cart: document.getElementById("stepCart"),
  shipping: document.getElementById("stepShipping"),
  payment: document.getElementById("stepPayment"),
  confirm: document.getElementById("stepConfirm"),
};

document.getElementById("cartBtn").addEventListener("click", () => {
  modal.style.display = "block";
  showStep("cart");
  renderCartItems();
});

document.getElementById("closeCheckout").addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Step Navigation
document.getElementById("toShipping").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  showStep("shipping");
});

document.getElementById("shippingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showStep("payment");
});

document.getElementById("paymentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showStep("confirm");
  renderConfirmItems();
  cart = [];
  saveCart();
  updateCartCount();
});

document.getElementById("closeConfirm").addEventListener("click", () => {
  modal.style.display = "none";
});

function showStep(step) {
  for (let s in steps) steps[s].style.display = "none";
  steps[step].style.display = "block";
}

// Init
updateCartCount();
// --- Search Functionality ---
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  // Filter products by search text
  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  // Show only the filtered products
  renderProducts(filtered);
});
renderProducts();

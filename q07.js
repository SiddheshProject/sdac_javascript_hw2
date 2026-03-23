function addToCart(product, stock) {
    if (stock <= 0) {
        throw new Error(product + " is out of stock ❌");
    }
    console.log(product + " added to cart ✅");
}

function processCart() {
    console.log("Processing cart...");
    
    addToCart("Laptop", 0);
    
    console.log("Cart processed"); 
}

function checkout() {
    try {
        processCart(); 
        console.log("Checkout successful 🎉");
    } catch (error) {
        console.log("Error during checkout:");
        console.log(error.message);
    }
}

checkout();
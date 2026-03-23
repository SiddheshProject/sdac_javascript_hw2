function checkInventory(product, quantity) {
    try {
        if (quantity < 5) {
            throw new Error(product + " stock is too low ⚠️ (Less than 5 units)");
        }
    
        console.log(product + " stock is sufficient ✅");
    } catch (error) {
        console.log("Inventory Alert:");
        console.log(error.message);
    }
}

checkInventory("Mobile", 10);  
checkInventory("Laptop", 3);
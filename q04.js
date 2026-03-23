function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Order 1", "Order 2", "Order 3"]);
        }, 3000); 
    });
}
async function showOrders() {
    let orders = await getOrders();  
    console.log(orders);
}
showOrders();
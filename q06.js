function processPayment(amt) {
    try {
        
        if (amt <= 0) {
            throw new Error("amt must be greater than 0");
        }

        
        if (amt > 5000) {
            throw new Error("Payment failed: Limit exceeded");
        }

        
        console.log("Processing payment of ₹" + amt);
        console.log("Payment Successful ✅");

    } catch (error) {
        
        console.log("Payment Failed ❌");
        console.log("Reason: " + error.message);
    }
}
processPayment(1000);   
processPayment(-50);    
processPayment(6000);   
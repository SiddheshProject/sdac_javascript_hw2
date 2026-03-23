class InvalidCouponCode extends Error {
    constructor(message) {
        super(message)

    }
}
function isValid(code) {
    if (code != "DISCOUNT25") {
        try {
            throw new Error("Coupon is expired or its invalid");
            
        } catch (error) {
            console.log(error.name+":"+error.message);
            
        }
    } else {
        console.log("Coupon is valid, Discount applied on final bill");
    }
}
isValid("DIS25")
isValid("DISCOUNT25")
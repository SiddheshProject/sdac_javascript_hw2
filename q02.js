class Product {
    name
    productId
    price

    constructor(name, productId, price) {
        this.name = name
        this.productId = productId
        this.price = price
    }

    displayDetails(){
        console.log(this.productId+" "+this.name+" "+this.price);
    }
}
const product = new Product("Electronics",901,77777)
product.displayDetails()
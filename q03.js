function product(details) {
    return new Promise((resolve, reject) => {
        if (details) {
            resolve(
                [
                    {name: "Mouse", price: 199, availability:"In Stock"},
                    {name: "Table", price: 1999, availability:"Out of Stock"}

                ]
            )
        } else {
            reject("None")
        }
    });
}
product(true).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
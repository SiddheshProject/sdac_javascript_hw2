function calculateTotal(total = 0, tax = 5, ...price) {
    for (let p of price) {
        total = total + p;  
    }
    
    total = total + tax;   
    console.log(total);
}

calculateTotal(27, 36, 125, 91);
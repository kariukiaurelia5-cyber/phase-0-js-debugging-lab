function calculateDiscountedPrice(quantity, pricePerItem) {
    debugger;
    
    let totalPrice = 0;
    debugger;

    for (let i = 1; i <= quantity; i++) {
        totalPrice += pricePerItem;
        debugger;
    }
    debugger;
    if (quantity >= 10) {
        totalPrice *= 0.9;
    }

    return totalPrice;
}
console.log('Total (5 @ 10) =>', calculateDiscountedPrice(5, 10));
console.log('Total (1 @ 10) =>', calculateDiscountedPrice(1, 10));


module.exports = calculateDiscountedPrice;
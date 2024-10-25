const sum = (a,b) => {
return a + b 
}



let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// dolares a yenes
function fromDollarToYen (dollar) {
let euro = dollar / oneEuroIs.USD;
let yenes = euro * oneEuroIs.JPY;
return yenes;
}
console.log(fromDollarToYen(10))

// euro a dolares
function fromEuroToDollar (euro) {
    return euro * oneEuroIs.USD;
}
console.log(fromEuroToDollar(20))

//yenes a libras 
function fromYenToPound (yen) {
    let euro = yen / oneEuroIs.JPY;
    return euro * oneEuroIs.GBP;
}
console.log(fromYenToPound(25))
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};


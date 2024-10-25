const { sum,fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});
//Test 1 dolares a yenes
test('de dolares a yenes', () => {
    let total = fromDollarToYen(10);
    expect(total).toBe(1462.6168224299065);
});
//Test 2 euros a dolares
test('de euros a dolares', () => {
    let total = fromEuroToDollar(20);
    expect(total).toBe(21.400000000000002);
});
//Test 3 de yenes a libras
test('de yenes a libras', () => {
    let total = fromYenToPound(25);
    expect(total).toBe(0.1389776357827476);
});



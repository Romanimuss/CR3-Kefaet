/* function */
function calculateInvoice(starterPrice, mainDishPrice, dessertPrice, beveragePrice) {
    const a = Number(starterPrice);
    const b = Number(mainDishPrice);
    const c = Number(dessertPrice);
    const d = Number(beveragePrice);
    return a + b + c + d;
}
/* Invoices (receeds) all possible Prices*/
console.log(`Invoice1: Starter:Ajvar Tajniri (€4.50),Single course (7.50€), Dessert:Trelece (6.50€), Beverage: Boza (€2.50), Total: $${calculateInvoice(4.50, 7.50, 6.50, 2.50)}0.`);
console.log(`Invoice2: Starter:Perdo Astali (€9.50), Main: Sarma (6.50€), Dessert:Lokum (3.50€), Beverage:Balkan Beer (€3.50) Total: $${calculateInvoice(9.50, 6.50, 3.50, 3.50)}0.`);
console.log(`Invoice3: Starter:Pershut Sandwich (€2.80), Main:Familie course (18.00€), Baverages:Shlivoviza (€3.50), Beverage:Fresh Lemon (€2.00), Dessert:Tulumba (€3.50) Total: $${calculateInvoice(2.80, 18.00, 3.50, 2.50, 3.50)}0.`);
// Student-Discount Function
function studentInvoice(starterPrice, mainDishPrice, dessertPrice, beveragePrice) {
    const a = Number(starterPrice) * 0.9;
    const b = Number(mainDishPrice) * 0.9;
    const c = Number(dessertPrice) * 0.9;
    const d = Number(beveragePrice);
    return (a + b + c + d).toFixed(2); 
}
console.log(`Discount-invoice1: Starter:Ajvar Tajniri(€4.50), Main: Single course (7.50), Dessert: Trelce(€6.50), Beverage: Boza(€3.50) Total: $${studentInvoice(4.50, 7.50, 6.50, 3.50)}.`);
console.log(`Discount-invoice2: Starter: Perdo Astali(€9.50), Main: Sarma(€6.50), Dessert: Lokum (€3.50), Beverage: Balkan Beer (€3.50) Total: $${studentInvoice(9.50, 7.50, 3.50, 3.00)}.`);
console.log(`Discount-invoice3: Starter: Perdo Astali(€9.50), Main: Familie course(€18.00), Dessert:Boza (€2.50), Beverage: Fresh Lemon(€2.00) Total: $${studentInvoice(9.50, 18.00, 2.50, 2.00)}.`);

console.table


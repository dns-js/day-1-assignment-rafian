const cart = [
  { product: { name: "Notebook", price: 25000 }, qty: 2 },
  { product: { name: "Pen", price: 5000 }, qty: 6 },
  { product: { name: "Bag", price: 150000 }, qty: 1 },
];

//step 1
function rectangleArea(width, height) {
    return width * height;
}

//step 2
const rectangleAreaArrow = (width, height) => width * height;

const labelWidth = 10;
const labelHeight = 4;
//var labelArea = rectangleArea(labelWidth, labelHeight); 
var labelArea = rectangleAreaArrow(labelWidth, labelHeight);

console.log("Step 1 & 2:\nlabelArea === ",labelArea)

//step 3
function calcSubtotals(cart) {
    return cart.map(({ product: { name, price }, qty }) => ({ name, subtotal: price * qty }));
}

console.log("Step 3\n",calcSubtotals(cart));

//step 4
function addItem(cart, newItem){
    const newCart = [...cart, newItem];
    return newCart;
}

const newItem = {
  product: { name: "Sticker", price: 2000 },
  qty: 10
};

const newCart = addItem(cart, newItem);
console.log("Step 4\n",newCart);
//console.log(calcSubtotals(newCart));


//step 5
function cartCalculator(cart) {
    for (let i = 0; i < cart.length; i++) {
        const { product: { name, price }, qty } = cart[i];
        if (qty > 0 && Number.isInteger(qty)) {
            } else {
                return `Invalid quantity for ${name} product`;            }    
        if (price > 0 && Number.isInteger(price)) {
            continue;
            } else {
                return `Invalid price for ${name} product`;
            }
        }
    return "All quantities and prices are valid!"
}

console.log("Step 5\n",cartCalculator(cart));

function totalQty(cart) {
    return cart.reduce((total, { qty }) => total + qty, 0);
}

//console.log("Total Quantity: ", totalQty(newCart));

function totalPrice(cart) {
    return cart.reduce((total, { product: { price }, qty }) => total + price * qty, 0);
}   

//console.log("Total Price: ", totalPrice(newCart));

const finaloutput = {};
finaloutput.labelArea = labelArea;
finaloutput.items = calcSubtotals(newCart);
finaloutput.totalQty = totalQty(newCart);
finaloutput.totalPrice = totalPrice(newCart);
console.log("Final output: \n",finaloutput);

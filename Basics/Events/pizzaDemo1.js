const pizza = require('./pizza-shop.js');
const Drink = require('./serveDrink');

const pizzaOrder = new pizza();
const drink = new Drink();

// console.log(pizzaOrder);

pizzaOrder.on("pizza-burger", ()=>{
    pizzaOrder.order();
    drink.serveDrink(2);
});

pizzaOrder.emit("pizza-burger");

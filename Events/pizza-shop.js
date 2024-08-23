const EventEmitter = require('events');
class PizzaShop extends EventEmitter{
    constructor(){
        super();
        this.orderCount = 0;
    }
    order(){
        this.orderCount++;
        console.log("order no:" + this.orderCount);
    }  
}

module.exports = PizzaShop;
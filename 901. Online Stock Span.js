
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let stack = this.stack;
    let span = 1;

    while(stack.length != 0 && stack[stack.length -1][0] <= price){
        span += stack.pop()[1];
    }

    stack.push([price, span]);

    return span;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

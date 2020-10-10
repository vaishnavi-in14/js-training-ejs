/* Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result. */
"use strict";
let calculator = {
    read() {
        this.val1 = 10;
        this.val2 = 20;
    },
    sum() {
        let sum = 0;
        sum = this.val1 + this.val2;
        return sum;
    },
    multiply() {
        let prod = 1;
        prod = this.val1 * this.val2;
        return prod;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.multiply());
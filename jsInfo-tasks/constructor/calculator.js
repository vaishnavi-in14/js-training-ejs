/* Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties. */
"use strict";
function Calculator() {
    this.read = function() {
        this.val1 = 10;
        this.val2 = 20;
    },
    this.sum = function() {
        let sum = 0;
        sum = this.val1 + this.val2;
        return sum;
    },
    this.mul = function() {
        let prod = 1;
        prod = this.val1 * this.val2;
        return prod;
    };
}

let calculator = new Calculator();
calculator.read();

console.log( "Sum=" + calculator.sum() );
console.log( "Mul=" + calculator.mul() );
/* Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero. */
"use strict";
function sumInput() {
    let numbers = [];
    while (true) {
        let value = prompt("A number?", 0);
        
        if(value === "" || value === null || !isFinite(value)) break;
        
        numbers.push(+value);
    }
    
    let sum = 0;
    for(let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sumInput());
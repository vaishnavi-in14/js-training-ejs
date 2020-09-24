"use strict";
function oddSum(n) {
    if(n <= 0) {
        return 0;
    }
    console.log(n);
    return n + oddSum(n-2);
}
 
let num = oddSum(9);
console.log(num);
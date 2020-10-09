/* 2
Write a function called cumulativeSum that takes an array of numbers and 
returns the cumulative sum; that is, a new array where the ith element is the sum of the first i+1 elements 
from the original array. For example:

>>> let t = [1, 2, 3]
>>> cumulativeSum(t)
[1, 3, 6]
*/

"use strict";
function cumulativeSum(t) {
    let cumSum = 0;
    let a = [];
    for(let num of t) {
        cumSum = cumSum + num;
        a.push(cumSum);
    }
    return a;
}

let t = [1, 2, 3];
console.log(cumulativeSum(t));


/* 1
   1+3
   1+3+6
*/
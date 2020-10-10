/* The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum. */
"use strict";
function getMaxSubSum(arr) {
    let sum = 0;
    for(let num of arr) {
        if (num > 0) {
            sum += num;
        } 
    }
    return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything. */
"use strict";
function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        if( arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
} 

let arr = [5, 3, 8, 1, 2, 3, 9, 10, 2, 4];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr );
/* Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

The function should not modify the array. It should return the new array. */
"use strict";
function filterRange(arr, a, b) {
    /* let newArr = [];
    for(let num of arr) {
        if( num >= a && num <= b) {
            newArr.push(num);
        }
    }
    return newArr; */
    return arr.filter(item => (item >= a && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr );
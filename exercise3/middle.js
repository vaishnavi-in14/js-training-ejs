/* 3
Write a function called middle that takes an array and returns a new array that contains 
all but the first and last elements. For example:

>>> let t = [1, 2, 3, 4]
>>> middle(t)
[2, 3]
*/
"use strict";
function middle(t) {
    let newArr = t.slice(1, t.length - 1);
    return newArr;
}

let t = [1, 2, 3, 4];
console.log(middle(t));
/* 1
Write a function called nestedSum that takes an array of arrays of integers 
and adds up the elements from all of the nested arrays. For example:

>>> let t = [[1, 2], [3], [4, 5, 6]];
>>> nestedSum(t)
21

*/
"use strict";
function nestedSum(t) {
    let sum = 0;
    for(let arr of t) {
        for(let num of arr) {
            sum = sum + num;
        }  
    }
    return sum;
}

let t = [[1, 2], [3], [4, 5, 6]];
console.log(nestedSum(t));
/* 5
Write a function called isSorted that takes a list as a parameter and returns true if the list is sorted in ascending order 
and false otherwise. For example:

>>> isSorted([1, 2, 2])
true
>>> isSorted(['b', 'a'])
false
*/
"use strict";
function isSorted(a) {
    let aCopy = a.slice();
    for(let i = 0; i < a.length; i++) {
        if(aCopy[i] === a.sort()[i]) {
            return true;
        }
        else {
            return false;
        }
    }
    
}

let arr = [1, 2, 2];
console.log(isSorted(arr));
let b = [3, 5, 2];
console.log(isSorted(b));
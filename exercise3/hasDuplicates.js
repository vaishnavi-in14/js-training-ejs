/* 7
 Write a function called hasDuplicates that takes an array and returns true 
 if there is any element that appears more than once. It should not modify the original array.
 */
"use strict";
function hasDuplicates(t) {
    return t.some(x => t.indexOf(x) !== t.lastIndexOf(x));
}

/* 
function hasDuplicates(t) {
    return t.some(x => t.indexOf(x) !== t.lastIndexOf(x));
}
*/

console.log(hasDuplicates([1,2,3,7,9,1,2]));
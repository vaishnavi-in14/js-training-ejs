"use strict";
function reverseArray(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function reverseArrayInPlace(a) {
    for(let j = 0; j < Math.floor(a.length / 2); j++) {
        let temp = a[j];
        a[j] = a[a.length - 1 - j];
        a[a.length - 1 - j] = temp;
    }
    return a;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log(reverseArray(["A", "B", "C"]));
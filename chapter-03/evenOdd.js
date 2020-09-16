"use strict";
function abs(num) {
    return num >= 0 ? num : -num;
}
function isEven(n) {
    if(abs(n) == 0) {
        return true;
    }
    if(abs(n) == 1) {
        return false;
    }
    return isEven(abs(n - 2));
}

console.log(isEven(-2));
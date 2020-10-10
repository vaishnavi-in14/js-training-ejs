/* Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive */
"use strict";
function checkSpam(str) {
    let lowerCase = str.toLowerCase();
    if(lowerCase.includes("viagra") || lowerCase.includes("xxx")) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
"use strict";
function countChar(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === letter) {
            count += 1;
        }
    }
    return count;
}

function countBs() {
    return countChar("BCB","B");
}

console.log(countBs());
console.log(countChar("kakkerklake", "k"));

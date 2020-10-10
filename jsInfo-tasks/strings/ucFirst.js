/* Write a function ucFirst(str) that returns the string str with the uppercased first character */
"use strict";
function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
}

console.log(ucFirst("john"));
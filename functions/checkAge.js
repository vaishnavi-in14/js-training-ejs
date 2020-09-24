"use strict";
function checkAge(age) {
    return (age > 18) ? true : "Did parents allow you";
}

console.log(checkAge(12));

function checkAge1(age) {
    return (age > 18) || "Did parents allow you";
}

console.log(checkAge1(24));
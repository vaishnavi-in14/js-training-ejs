"use strict";
function abs(x) {
    return x >= 0 ? x : -x;
}
function square(x) {
    return x * x;
}
function goodEnough(guess, x) {
    return abs(square(guess) - x) < 0.001;
}
function average(x,y) {
    return (x + y) / 2;
}
function improve(guess, x) {
    return average(guess, x / guess);
}
function sqrtIter(guess, x) {
    return goodEnough(guess, x)
        ? guess
        : sqrtIter(improve(guess, x), x);
}

console.log(sqrtIter(9,90));
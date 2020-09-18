"use strict";
function abs(x) {
    return x >= 0 ? x : -x;
}
function cube(x) {
    return x * x * x;
}
function goodEnough(approx, x) {
    return abs(cube(approx) - x) < 0.001;
}
function square(x) {
    return x * x;
}
function improve(approx, x) {
    return (x / square(approx) + 2 * approx) / 3;
}
function cuberoot(approx, x) {
    return goodEnough(approx, x)
        ? approx
        : cuberoot(improve(approx, x), x);
}
console.log(cuberoot(3, 50));
/* The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max). */
"use strict";
function random(min, max) {
    let num = Math.random() * (max - min + 1) + min;
    return num;
}

console.log(random(1, 5));
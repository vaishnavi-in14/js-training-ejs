"use strict";
function min(a, b) {
    return a < b ? a : b; 
}

function test(label, body) {
    if(!body()) console.log(`Failed: ${label}`);
}

test("Minimum of (1, 10) returns 1", () => {
    return min(1, 10) === 1;
});

test("Minimum of (2, 9) returns 9", () => {
    return min(2, 9) === 9;
});

test("Minimum of (0, -1) returns -1", () => {
    return min(0, -1) === -1;
});

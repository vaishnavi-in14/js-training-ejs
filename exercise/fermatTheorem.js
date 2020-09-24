"use strict";
function pow(base, exponent) {
    let res = 1;
    for(let count = 0; count < exponent; count++) {
        res *= base;
    }
    return res;
}
function checkFermat(a, b, c, n) {
    let sumOfPowers = pow(a, n) + pow(b, n);
    if((sumOfPowers == pow(c, n)) && n > 2) {
        console.log("Holy smokes, Fermat was wrong!");
    }
    else {
        console.log("No that doesn't work");
    }
}

checkFermat(2,1,3,3);
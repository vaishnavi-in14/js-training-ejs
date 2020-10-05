"use strict";
function range(start, end, step = start < end ? 1 : -1) {
    let a = [];
    if(step < 0) {
        for(let i = start; i >= end; i += step) {
            a.push(i);
        } 
    }
    else {
        for(let i = start; i <= end; i += step) {
            a.push(i);
        } 
    }   
    return a;
}

function sum(t) {
    let total = 0;
    for(let num of t) {
        total = total + Number(num);
    }
    return total;
}
console.log(range(5, 2));
console.log(sum(range(1, 10)));
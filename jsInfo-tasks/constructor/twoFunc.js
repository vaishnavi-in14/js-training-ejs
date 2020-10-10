/* Is it possible to create functions A and B such as new A()==new B()? */
"use strict";
let obj = {};
function A() { 
    return obj;
}
function B() { 
    return obj;
}

let a = new A;
let b = new B;

console.log( a === b );
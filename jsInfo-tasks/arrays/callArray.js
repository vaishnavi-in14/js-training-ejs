/* What is the result? Why? */
"use strict";
let arr = ["a", "b"];

arr.push(function() {
    console.log( this );
});

arr[2](); 
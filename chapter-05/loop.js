"use strict";
function loop(initial, cond, inc, body) {
    for(let i = initial; cond(i); i = inc(i)) {
        body(i);
    }
}



loop(3, n => n > 0, n => n - 1, console.log);

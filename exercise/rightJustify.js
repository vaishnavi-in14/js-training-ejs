"use strict";
function rightJustify(s) {
    for(let i = s.length; i <= 70; i++) {
        s = " " + s;
    }
    console.log(s);
}

rightJustify("monty");
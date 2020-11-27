"use strict";
function count(obj) {
    let count = 0;
    for(let keys of Object.keys(obj)) {
        count++;
    }
    return count;
}

let user = {
    name: "John",
    age: 30
};
console.log(count(user));
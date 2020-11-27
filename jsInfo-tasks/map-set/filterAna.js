"use strict";
function aclean(arr) {
    let map = new Map();
    for(let str of arr) {
        let sorted = str.toLowerCase().split("").sort().join(""); 
        map.set(sorted, str);
    }
    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );
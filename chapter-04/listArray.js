"use strict";
function arrayToList(array) {
    let list = null;
    for(let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(val, list) {
    list = {value: val, rest: list};
    return list;
}

console.log(prepend(10, prepend(20, null)));

function nth(list, pos) {
    if (!list) return undefined;
    else if (pos === 0) return list.value;
    else return nth(list.rest, pos - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));
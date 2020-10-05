"use strict";
let arrays = [[1, 2, 3], [4, 5], [6]];
let result = arrays.reduce((element, cur) => element.concat(cur));
console.log(result);
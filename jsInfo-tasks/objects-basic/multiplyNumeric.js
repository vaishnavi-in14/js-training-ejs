/* Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */
"use strict";
function multiplyNumeric(obj) {
    for(let key in obj) {
        if(typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
    return obj;
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
console.log(multiplyNumeric(menu));
"use strict";
let user = {
    name: "John Smith",
    age: 35
};
  
let user2 = JSON.parse(JSON.stringify(user));
console.log(user2);
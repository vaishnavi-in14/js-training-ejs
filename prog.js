"use strict";
let data = [
    {
        name: "Butters",
        age: 3,
        type: "dog"
    },
    {
        name: "Lizzy",
        age: 6,
        type: "dog"
    },
    {
        name: "Red",
        age: 1,
        type: "cat"
    },
    {
        name: "Joey",
        age: 3,
        type: "dog"
    },
];

/*
Select only the dogs
Translate their ages into dog years (multiply them by seven)
Sum the results
*/

let result = data.filter(each => each.type === "dog")
    .map(data => data.age * 7)
    .reduce((acc, cur) => acc + cur);

console.log(result);

let tasks = [
    {
        name: "Write for Envato Tuts+",
        duration: 120,
        isPriority: true
    },
    {
        name: "Work out",
        duration: 60,
        isPriority: true
    },
    {
        name: "Read Novel",
        duration: 240,
        isPriority: false
    },
    {
        name: "Read EJS",
        duration: 120,
        isPriority: true

    },
    {
        name: "Have dinner",
        duration: 30,
        isPriority: true
    },
    {
        name: "Take a nap",
        duration: 10,
        isPriority: false
    },
    {
        name: "Procrastinate on Duolingo",
        duration: 240,
        isPriority: false
    }
];
const isPriority = ({isPriority}) => isPriority;
const getName = ({name}) => name;
for(let each of tasks) {
    console.log(isPriority(each));
    console.log(getName(each));
}

console.log(tasks.filter(isPriority).map(getName));
console.log(tasks.filter(each => each.isPriority === false)
    .map(each => each.duration)
    .reduce((acc, cur) => acc + cur)); 

/* List of priority task names.
How much effort is spent on non priority tasks  */

const friends = [
    { id: 1, name: "Sting", nearMe: true },
    { id: 2, name: "Radiohead", nearMe: true },
    { id: 3, name: "NIN", nearMe: false },
    { id: 4, name: "Echo", nearMe: true },
    { id: 5, name: "Zeppelin", nearMe: false }
];
  
/*
names of friends who are near me
*/
let names = friends.filter(each => each.nearMe === true).map(each => each.name);
console.log(names); 

// "use strict";
let response = 
[
    {
        "attributes": {
            "color": null,
            "labelVisible": false,
            "name": "Premium"
        },
        "id": "Premium",
        "type": "package"
    },
    {
        "attributes": {
            "color": null,
            "labelVisible": false,
            "name": "Registered"
        },
        "id": "Registered",
        "type": "package"
    },
    {
        "attributes": {
            "name": "Ultra HD"
        },
        "id": "ultra-hd",
        "type": "feature"
    },
    {
        "attributes": {
            "currency": "SEK",
            "period": "MONTH",
            "postponedDays": 30,
            "price": 7900,
            "currencyDecimalPoints": 2,
            "type": "ONGOING"
        },
        "id": "1",
        "type": "pricePlan"
    },
    {
        "attributes": {
            "currency": "SEK",
            "period": "YEAR",
            "price": 80000,
            "currencyDecimalPoints": 2,
            "type": "INSTALMENTS",
            "numberOfInstalments": 12
        },
        "id": "8",
        "type": "pricePlan"
    },
    {
        "attributes": {
            "currency": "SEK",
            "period": "YEAR",
            "price": 10000,
            "currencyDecimalPoints": 2
        },
        "id": "9",
        "type": "pricePlan"
    },
    {
        "attributes": {
            "richTextContent": {
                "blocks": [

                ],
                "entityMap": {

                }
            },
            "richTextHtml": "<h1>Text</h1>"
        },
        "id": "d646335d-db49-40ef-b515-7167b9e79edf",
        "type": "articleBodyRichText"
    }
];
// Collect items with type "pricePlan" and transform such objects to have atrributes currency as "USD"
// Find out total price of all price plans
// Collect all types available in an array

let item = response.filter(each => each.type === "pricePlan").filter(each => each.attributes.currency = "USD");
let prices = response.filter(each => each.type === "pricePlan")
    .map(each => each.attributes.price)
    .reduce((acc, cur) => acc + cur); 
let types = response.map(each => each.type).reduce((acc, cur) => (acc.indexOf(cur) === -1) ? acc.concat(cur) : acc, [ ]);
console.log(item);
console.log(prices);
console.log(types); 
/* We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it. */
"use strict";
function extractCurrencyValue(str) {
    return str = +str.slice(1);
}

console.log(extractCurrencyValue("$120"));
/* Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string. */
"use strict";
function truncate(str, maxlength) {
    if(str.length > maxlength) {
        str = str.slice(0, 19) + "…";
    }
    return str;
} 

console.log(truncate("What I'd like to tell on this topic is:", 20));
console.log(truncate("Hi everyone!", 20));
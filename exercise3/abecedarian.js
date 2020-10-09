/* 9
A word is said to be “abecedarian” if the letters in the word appear in alphabetical order. 
For example, the following are all six-letter English abecedarian words:

abdest, acknow, acorsy, adempt, adipsy, agnosy, befist, behint, beknow, 
bijoux, biopsy, cestuy, chintz, deflux, dehors, dehort, deinos, diluvy, dimpsy
Write a function called isAbecedarian that takes a String and returns a boolean indicating whether the word is abecedarian
*/
"use strict";
function isAbecedarian(s) {
    s.toLowerCase();
    for(let letter of s) {
        for(let j = 1; j < s.length; j++) {
            return (letter < s[j]) ? true : false;
        }
    }
}


console.log(isAbecedarian("dimpsy"));
/* 6
Two words are anagrams if you can rearrange the letters from one to spell the other.
 Write a function called isAnagram that takes two strings and returns true if they are anagrams.
 */
"use strict";
function isAnagram(s1, s2) {
    if(s1.length === s2.length) {
        for(let letter of s1) {
            for(let j = 1; j < s2.length; j++) {
                if(letter === s2[j]) {
                    return true;
                }
                return false;
            }
        }
    }
    else {
        return false;
    }
}

let s1 = "CAT";
let s2 = "ACT";
console.log(isAnagram(s1,s2));
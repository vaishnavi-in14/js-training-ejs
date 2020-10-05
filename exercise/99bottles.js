"use strict";
function bottlesOfWater() {
    for(let n = 99; n > 0; n--) {
        console.log(n,"bottles of water on the wall,");
        console.log(n,"bottles of water,\nya’ take one down, ya’ pass it around,");
        console.log(n - 1,"bottles of water on the wall.\n");  
    }
    console.log("No bottles of water on the wall,\nno bottles of water,");
    console.log("ya’ can’t take one down, ya’ can’t pass it around,\n’cause there are no more bottles of water on the wall!");  
} 

bottlesOfWater();
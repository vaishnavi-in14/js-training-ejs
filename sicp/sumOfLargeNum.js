function square(x) {
    return x * x;
}


function sumOfLargerNum(n1, n2, n3) {
    if(n1 > n3 && n2 > n3) {
        return square(n1) + square(n2);
    }
    else if(n1 > n2 && n3 > n2) {
        return square(n1) + square(n3);
    }
    else {
        return square(n2) + square(n3);
    }
}

console.log(sumOfLargerNum(2,3,4));
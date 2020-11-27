"use strict";
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get length() {
        return (Math.sqrt((this.x ** 2) + (this.y ** 2)));
    }
}
    


Vec.prototype.plus = function (next) {
    return new Vec(this.x + next.x, this.y + next.y);
};

Vec.prototype.minus = function (next) {
    return new Vec(this.x - next.x, this.y - next.y);
};


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
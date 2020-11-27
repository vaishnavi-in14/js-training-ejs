"use strict";
class Group {
    constructor() {
        this.elements = [];
    }
    add(element) {
        if(this.elements.indexOf(element) === -1) {
            this.group.concat(element);
        }
    }

    delete(element) {
        this.elements = this.elements.filter(each => each !== element);
    }

    has(element) {
        for(let cur of this.elements) {
            if(cur === element) {
                return true;
            }
        }
        return false;
    }

    static from(array) {
        let newGroup = new Group;
        for (let val of array) {
            newGroup.add(val);
        }
        return Group;
    } 
}

class GroupIterator {
    constructor() {
        this.group = [];
        this.position = 0;
    }
    next() {
        if(this.position < this.end) {
            let value = {value: this.group.elements[this.position], done: false};
            this.position += this.step;
            return value;
        }
        return {done: true};
    }
}

GroupIterator;

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

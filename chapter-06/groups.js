"use strict";
class Group {
    constructor() {
        this.group = [];
    }
    add(element) {
        if(this.group.indexOf(element) === -1) {
            this.group.concat(element);
        }
    }

    delete(element) {
        this.group = this.group.filter(each => each !== element);
    }

    has(element) {
        for(let cur of this.group) {
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
  
let group = Group.from([10, 20]);
console.log(group.has(10));

console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));
let str = "";
let size = 8;
for (i = 0; i < size; i++) {
    for (j = 0; j < size; j++) {
        if ((i + j) % 2 == 0) {
            str += " ";
        }
        else {
            str += "#";
        }
    }
    str += "\n";
}
console.log(str);
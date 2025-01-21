function challenge1(width, height) {
    let rectangleString = '';
    for (let i = 0; i < height; i++) {
        rectangleString += '*'.repeat(width);
        if (i < height - 1) {
            rectangleString += '\n';
        }
    }
    return rectangleString;
}
console.log("width 3 and height 4");
console.log(challenge1(3, 4));

console.log("width 5 and height 2");
console.log(challenge1(5, 2));

console.log("width 5 and height -2");
console.log(challenge1(5, -2));

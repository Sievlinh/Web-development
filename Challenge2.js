function reverseArray(numbers) {
    let reversedArray = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reversedArray.push(numbers[i]);
    }
    return reversedArray;
}
let array1 = [14, 15, 16, 20];
let reversed1 = reverseArray(array1);
console.log("Array: [14, 15, 16, 20]");
console.log(reversed1);

let array2 = [5, 4, 3, 2, 1];
let reversed2 = reverseArray(array2);
console.log("Array: [5, 4, 3, 2, 1]");
console.log(reversed2);

let array3 = [];
let reversed3 = reverseArray(array3);
console.log("Array: []");
console.log(reversed3);
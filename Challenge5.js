//Example 1
function countWords1(sentence1) {
    let words = sentence1.trim().split(/\s+/);
    return words.length;
}
let sentence1 = "  Hello world";
let wordCount1 = countWords1(sentence1);
console.log("Example 1: Text [Hello world]")
console.log("Number of words:", wordCount1);

//Example 2
function countWords2(sentence2) {
    let words = sentence2.trim().split(/\s+/);
    return words.length;
}
let sentence2 = " This is the best day";
let wordCount2 = countWords2(sentence2);
console.log("Example 2: Text [This is the best day]");
console.log("Number of words:", wordCount2);

//Example 3
function countWords3(sentence3) {
    let words = sentence3.trim().split(/\s+/);
    return words.length;
}
let sentence3 = " a bb ccc ddddddd e";
let wordCount3 = countWords3(sentence3);
console.log("Example 3: Text [a bb ccc ddddddd e] ");
console.log("Number of words:", wordCount3);
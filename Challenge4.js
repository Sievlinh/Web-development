function countCharacterOccurrences(string, char) {
    return string.split(char).length - 1;
}
const word = "hello world";
const character = "o";
console.log(`There are ${countCharacterOccurrences(word, character)} '${character}' in the word '${word}'.`);

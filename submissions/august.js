// [your_name].js
// Replace [your_name] with your actual name
const name = 'August'; // replace with your actual name here too
// Task 1
// Create a function called testSubject with one parameter (name).
// It should return the string: "[name] is being tested"
// Example: testSubject("Alice") should return "Alice is being tested"
// --------------------------------------------------------------------------------------------

function testSubject(name) {
    return `${name} is being tested`;
}
console.log(testSubject("Alice"));

// Task 2
// Create a function called addNumbers that takes two parameters (num1, num2).
// The function should return the sum of the two numbers.
// --------------------------------------------------------------------------------------------

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(5,4));

// Task 3
// Create a function called isEven that takes one parameter (num).
// The function should return true if the number is even, and false if it is odd.
// --------------------------------------------------------------------------------------------

function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4));

// Task 4
// Create a function called multiplyByTwo that takes one parameter (num).
// It should return the number multiplied by 2.
// --------------------------------------------------------------------------------------------

function multiplyByTwo(num) {
    return num * 2;
}
console.log(multiplyByTwo(4))

// Task 5
// Create a function called doubleSum that takes two parameters (num1, num2).
// It should call multiplyByTwo for both numbers and return the sum of the results.
// --------------------------------------------------------------------------------------------

function doubleSum(num1, num2) {
    return multiplyByTwo(num1) + multiplyByTwo(num2);
}
console.log(doubleSum(3,4));

// Task 6
// Create a function called sentenceBuilder that any number of parameters, and regardless
// of the parameter datatype, it builds a string where all the parameters are separated by a
// '-' hyphen.
// Example: sentenceBuilder(geir,hilmersen), should return "geir-hilmersen"
// --------------------------------------------------------------------------------------------

function sentenceBuilder(...params) {
    return params.join('-');
}
console.log(sentenceBuilder("geir", "hilmersen"));

// Task 7
// Create a function called stringSplitter that takes exactly one argument, a string and 
// splits it on every whitespace " " and returns the string as an array. The resulting array
// should NOT contain empty strings/strings that return 0 on .length
// --------------------------------------------------------------------------------------------

function stringSplitter(str) {
    return str.split(' ').filter(word => word.length > 0);
}
console.log(stringSplitter("test test test robert"));

// Task 8
// Create a function called decapitalizer that accepts any number of arguments.
// The function should:
// Filter out non-string arguments.
// Convert all string arguments to lowercase.
// Concatenate the resulting strings with an equal sign (=) between them
// decapitalizer("Hello", 42, "WORLD", true, "JavaScript");
// Expected output: "hello=world=javascript"
// --------------------------------------------------------------------------------------------

function decapitalizer(...args) {
    return args
        .filter(arg => typeof arg === 'string')
        .map(str => str.toLowerCase())
        .join('=');
}
console.log(decapitalizer("Hello", 42, "WORLD", true, "JavaScript"))

// Task 9
// Task Description
// Create a function called findLongestWord that takes a string as input.
// The function should split the string into words (separated by whitespace).
// It should return the longest word in the string.
// If there are multiple longest words of the same length, return the first one.
// --------------------------------------------------------------------------------------------

function findLongestWord(str) {
    return str.split(' ').reduce((longest, current) =>
        current.length > longest.length ? current : longest, "");
}
console.log(findLongestWord("robert gwiah nagbe simon lolloll tijanic"))


// Task 10
// Create a function called countWords that takes a string as input.
// The function should count words within a sentence, seperated by a period '.' and
// return the longest sentence and the count in this format
// sentence:count
// example: countWords('This is bad. We are all going to die! All hope is lost!');
// returns: "We are all going to die!:6"
// --------------------------------------------------------------------------------------------


function countWords(text) {
    let sentences = text
    .split(/[.!?]/)
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0);
    let longest = sentences.reduce((a,b) => 
        (b.split(/\s+/).length > a.split(/\s+/).length ? b : a), "");
    return `${longest}:${longest.split(/\s+/).length}`;
}
console.log(countWords("This is bad. We are all going to die! All hope is lost!"));

// Task 11
// Create function called executeCallback that takes two parameters
// A string (message)
// a callback functions (callback)
// The functions shall call the provided callback function, passing message as an argument.
// --------------------------------------------------------------------------------------------
function executeCallback(message, callback) {
    try {
        callback(message);
    } catch(err) {
        console.log(err);
    }
}
executeCallback("Hello!", console.log);

// Task 12
// Create a function called serialExecutor(count, callback).
// It should call the callback function exactly count times.
// count will always be a positive integer.
// --------------------------------------------------------------------------------------------

function serialExecutor(count, callback) {
    try {
        for (let i = 0; i < count; i++) {
            callback();
        }
    } catch (err) {
        console.log(err);
    }
}

serialExecutor(5, () => console.log("5 ganger"));
  
// Task 13
// Create a function, applyToEach that takes an array and a function as an argument
// The callback shall be called with every value in the array as an argument
// --------------------------------------------------------------------------------------------

function applyToEach (arr, callback) {
    arr.forEach(callback);
}
applyToEach([1,2,3], console.log);

// Export the functions for testing
module.exports = {
    name,
    testSubject: typeof testSubject === "function" ? testSubject : undefined,
    addNumbers: typeof addNumbers === "function" ? addNumbers : undefined,
    isEven: typeof isEven === "function" ? isEven : undefined,
    multiplyByTwo: typeof multiplyByTwo === "function" ? multiplyByTwo : undefined,
    doubleSum: typeof doubleSum === "function" ? doubleSum : undefined,
    sentenceBuilder: typeof sentenceBuilder === "function" ? sentenceBuilder : undefined,
    stringSplitter: typeof stringSplitter === "function" ? stringSplitter : undefined,
    decapitalizer: typeof decapitalizer === "function" ? decapitalizer : undefined,
    findLongestWord: typeof findLongestWord === "function" ? findLongestWord : undefined,
    countWords: typeof countWords === "function" ? countWords : undefined,
    executeCallback: typeof executeCallback === "function" ? executeCallback : undefined,
    serialExecutor: typeof serialExecutor === "function" ? serialExecutor : undefined,
    applyToEach: typeof applyToEach === "function" ? applyToEach : undefined
};

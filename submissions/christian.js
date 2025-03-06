// [your_name].js
// Replace [your_name] with your actual name
const name = '[christian]'; // replace with your actual name here too
// Task 1
// Create a function called testSubject with one parameter (name).
// It should return the string: "[name] is being tested"
// Example: testSubject("Alice") should return "Alice is being tested"
// --------------------------------------------------------------------------------------------

function testSubject(name){
    return(name + " is being tested")
}

// Task 2

// Create a function called addNumbers that takes two parameters (num1, num2).
// The function should return the sum of the two numbers.
// --------------------------------------------------------------------------------------------
function addNumbers(num1, num2){
    const sum = num1 + num2
    return(sum)
}

// Task 3
// Create a function called isEven that takes one parameter (num).
// The function should return true if the number is even, and false if it is odd.
// --------------------------------------------------------------------------------------------
function isEven(num){
    const dividednum = num / 2
    const newnum = Math.round(dividednum)
    if (dividednum !== newnum) {
        return false
    } else {
        return true
    }
}



///////////////////////////////////////////////////////////////////

// Task 4
// Create a function called multiplyByTwo that takes one parameter (num).
// It should return the number multiplied by 2.
// --------------------------------------------------------------------------------------------
function multiplyByTwo(num){
    return(num*2)
}

// Task 5
// Create a function called doubleSum that takes two parameters (num1, num2).
// It should call multiplyByTwo for both numbers and return the sum of the results.
// --------------------------------------------------------------------------------------------
function doubleSum(num1, num2){
    const firstmulti = multiplyByTwo(num1)
    const secondmulti = multiplyByTwo(num2)
    return(firstmulti+secondmulti)
}

// Task 6
// Create a function called sentenceBuilder that any number of parameters, and regardless
// of the parameter datatype, it builds a string where all the parameters are separated by a
// '-' hyphen.
// Example: sentenceBuilder(geir,hilmersen), should return "geir-hilmersen"
// --------------------------------------------------------------------------------------------
function sentenceBuilder(){
    let result = "";
    const lengthofarguments = arguments.length

    for (let i = 0; i < arguments.length; i++) {
        if (lengthofarguments !== i+1){
            result +=  arguments[i] + "-"
        } else {
            result += arguments[i]
        }

    }
    return(result)

}


// Task 7
// Create a function called stringSplitter that takes exactly one argument, a string and 
// splits it on every whitespace " " and returns the string as an array. The resulting array
// should NOT contain empty strings/strings that return 0 on .length
// --------------------------------------------------------------------------------------------
function stringSplitter(string){
    const words = string.split(" ");
    let finished = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] === " ") {
            console.log("bahaha")
        } else if (words[i] === "") {
            console.log("bahahaha")
        } else {
            finished.push(words[i])
        }
    }

    return(finished)
}

// Task 8
// Create a function called decapitalizer that accepts any number of arguments.
// The function should:
// Filter out non-string arguments.
// Convert all string arguments to lowercase.
// Concatenate the resulting strings with an equal sign (=) between them
// decapitalizer("Hello", 42, "WORLD", true, "JavaScript");
// Expected output: "hello=world=javascript"
// --------------------------------------------------------------------------------------------
function decapitalizer(){
    let result = "";
    const lengthofarguments = arguments.length
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "string") {
            if (lengthofarguments !== i+1){
                result += arguments[i]+"="
            } else {
                result += arguments[i]
            }
        }
    }
    return(result.toLocaleLowerCase())

}

// Task 9
// Task Description
// Create a function called findLongestWord that takes a string as input.
// The function should split the string into words (separated by whitespace).
// It should return the longest word in the string.
// If there are multiple longest words of the same length, return the first one.
// --------------------------------------------------------------------------------------------
function findLongestWord(string){
    const words = string.split(" ");
    console.log(words)
    let indexofwords = 0
    let longestword = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > indexofwords) {
            indexofwords = words[i].length
            longestword = words[i]
        }
    }
    return(longestword)
}

// Task 10
// Create a function called countWords that takes a string as input.
// The function should count words within a sentence, seperated by a period '.' and
// return the longest sentence and the count in this format
// sentence:count
// example: countWords('This is bad. We are all going to die! All hope is lost!');
// returns: "We are all going to die!:6"
// --------------------------------------------------------------------------------------------

// Geir husk du sa at det var bare splittet på punktum og sa at jeg ikke skulle splitte på "!"
function countWords(string){
    const longestsentence = string.split(".");
    let lastlongest = ""
    for (let i = 0; i < longestsentence.length; i++) {
        if (longestsentence[i].length > lastlongest.length) {
            indexofwords = longestsentence[i].length
            lastlongest = longestsentence[i]
        }
    }
    const arrayofwords = string.split(" ");
    const numberofwords = arrayofwords.length

    return(lastlongest+":"+numberofwords)
}

// Task 11
// Create function called executeCallback that takes two parameters
// A string (message)
// a callback functions (callback)
// The functions shall call the provided callback function, passing message as an argument.
// --------------------------------------------------------------------------------------------
function executeCallback(message, callback){
    try {
        callback(message)
    } catch (error){
        console.error(error)
    }
}

// Task 12
// Create a function called serialExecutor(count, callback).
// It should call the callback function exactly count times.
// count will always be a positive integer.
// --------------------------------------------------------------------------------------------
function serialExecutor(count, callback){
    let counting = 0
    while (counting < count) {
        try {
            callback()
        } catch (error){
            console.error(error)
        }
        counting++
    }
}

// Task 13
// Create a function, applyToEach that takes an array and a function as an argument
// The callback shall be called with every value in the array as an argument
// --------------------------------------------------------------------------------------------
function applyToEach(passedarray, callback){
    for (let i = 0; i < passedarray.length; i++) {
        try {
            callback(passedarray[i])
        } catch (error){
            console.error(error);
        }
    }

}

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

const {
    createTaskReport,
    isValidFunction
} = require('../testUtils/testUtils');

// Task 6
function testTask6(submissionModule) {
    const task6Report = createTaskReport();

    if (isValidFunction(submissionModule.sentenceBuilder)) {
        task6Report.statements.push("The function 'sentenceBuilder' is implemented correctly.");
        task6Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns a string
        const testOutput = submissionModule.sentenceBuilder("hello", "world");
        if (typeof testOutput === "string") {
            task6Report.statements.push("Function returns a string. +1 score");
            task6Report.score += 1;
        } else {
            task6Report.statements.push("Warning: Function does not return a string.");
        }

        // ✅ Ensure function can take any number of parameters
        if (submissionModule.sentenceBuilder.length === 0) {
            task6Report.statements.push("Function is correctly set up to accept any number of arguments. +1 score");
            task6Report.score += 1;
        } else {
            task6Report.statements.push("Warning: Function is not using rest parameters or does not support dynamic arguments.");
        }

        try {
            // ✅ Test for correctness
            if (
                submissionModule.sentenceBuilder("a", "b") === "a-b" &&
                submissionModule.sentenceBuilder("hello", "cruel", "world", "of", "zap") === "hello-cruel-world-of-zap" &&
                submissionModule.sentenceBuilder(1, 2, 3) === "1-2-3" &&
                submissionModule.sentenceBuilder("apple", 5, true, "banana") === "apple-5-true-banana"
            ) {
                task6Report.statements.push("Test passed: sentenceBuilder correctly joins parameters with '-'. +3 score");
                task6Report.score += 3;
            } else {
                task6Report.statements.push("Test failed: Incorrect string format.");
            }

        } catch (error) {
            task6Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task6Report.statements.push("Task 6 failed: sentenceBuilder function is missing or incorrect.");
    }

    return task6Report;
}

function testTask7(submissionModule) {
    const task7Report = createTaskReport();

    if (isValidFunction(submissionModule.stringSplitter)) {
        task7Report.statements.push("The function 'stringSplitter' is implemented correctly.");
        task7Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns an array
        const testOutput = submissionModule.stringSplitter("hello world");
        if (Array.isArray(testOutput)) {
            task7Report.statements.push("Function returns an array. +1 score");
            task7Report.score += 1;
        } else {
            task7Report.statements.push("Warning: Function does not return an array.");
        }

        // ✅ Check if function has exactly one parameter
        if (submissionModule.stringSplitter.length === 1) {
            task7Report.statements.push("Function has exactly one parameter. +1 score");
            task7Report.score += 1;
        } else {
            task7Report.statements.push("Warning: Incorrect number of parameters.");
        }

        try {
            // ✅ Test for correctness
            if (
                JSON.stringify(submissionModule.stringSplitter("hello world")) === JSON.stringify(["hello", "world"]) &&
                JSON.stringify(submissionModule.stringSplitter("This is a test")) === JSON.stringify(["This", "is", "a", "test"]) &&
                JSON.stringify(submissionModule.stringSplitter("singleword")) === JSON.stringify(["singleword"]) &&
                JSON.stringify(submissionModule.stringSplitter("  multiple   spaces ")) === JSON.stringify(["multiple", "spaces"])
            ) {
                task7Report.statements.push("Test passed: stringSplitter correctly splits strings on spaces. +3 score");
                task7Report.score += 3;
            } else {
                task7Report.statements.push("Test failed: Incorrect output.");
            }

        } catch (error) {
            task7Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task7Report.statements.push("Task 7 failed: stringSplitter function is missing or incorrect.");
    }

    return task7Report;
}

function testTask8(submissionModule) {
    const task8Report = createTaskReport();

    if (isValidFunction(submissionModule.decapitalizer)) {
        task8Report.statements.push("The function 'decapitalizer' is implemented correctly.");
        task8Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns a string
        const testOutput = submissionModule.decapitalizer("HELLO");
        if (typeof testOutput === "string") {
            task8Report.statements.push("Function returns a string. +1 score");
            task8Report.score += 1;
        } else {
            task8Report.statements.push("Warning: Function does not return a string.");
        }

        // ✅ Ensure function can take any number of parameters
        if (submissionModule.decapitalizer.length === 0) {
            task8Report.statements.push("Function is correctly set up to accept any number of arguments. +1 score");
            task8Report.score += 1;
        } else {
            task8Report.statements.push("Warning: Function does not support dynamic arguments.");
        }

        try {
            // ✅ Test for correctness
            if (
                submissionModule.decapitalizer("Hello", 42, "WORLD", true, "JavaScript") === "hello=world=javascript" &&
                submissionModule.decapitalizer("PYTHON", "is", "AWESOME") === "python=is=awesome" &&
                submissionModule.decapitalizer(123, false, null, "NODE", "JAVASCRIPT") === "node=javascript" &&
                submissionModule.decapitalizer() === ""
            ) {
                task8Report.statements.push("Test passed: decapitalizer correctly processes strings. +3 score");
                task8Report.score += 3;
            } else {
                task8Report.statements.push("Test failed: Incorrect output.");
            }

        } catch (error) {
            task8Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task8Report.statements.push("Task 8 failed: decapitalizer function is missing or incorrect.");
    }

    return task8Report;
}

function testTask9(submissionModule) {
    const task9Report = createTaskReport();

    if (isValidFunction(submissionModule.findLongestWord)) {
        task9Report.statements.push("The function 'findLongestWord' is implemented correctly.");
        task9Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns a string
        const testOutput = submissionModule.findLongestWord("hello world");
        if (typeof testOutput === "string") {
            task9Report.statements.push("Function returns a string. +1 score");
            task9Report.score += 1;
        } else {
            task9Report.statements.push("Warning: Function does not return a string.");
        }

        // ✅ Check if function has exactly one parameter
        if (submissionModule.findLongestWord.length === 1) {
            task9Report.statements.push("Function has exactly one parameter. +1 score");
            task9Report.score += 1;
        } else {
            task9Report.statements.push("Warning: Incorrect number of parameters.");
        }

        try {
            // ✅ Test for correctness
            if (
                submissionModule.findLongestWord("The quick brown fox jumps over the lazy dog") === "quick" &&
                submissionModule.findLongestWord("JavaScript is awesome") === "JavaScript" &&
                submissionModule.findLongestWord("One two three four five") === "three" &&
                submissionModule.findLongestWord("This test should return the first longest word") === "longest"
            ) {
                task9Report.statements.push("Test passed: findLongestWord correctly finds the longest word. +3 score");
                task9Report.score += 3;
            } else {
                task9Report.statements.push("Test failed: Incorrect longest word returned.");
            }

        } catch (error) {
            task9Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task9Report.statements.push("Task 9 failed: findLongestWord function is missing or incorrect.");
    }

    return task9Report;
}

function testTask10(submissionModule) {
    const task10Report = createTaskReport();

    if (isValidFunction(submissionModule.countWords)) {
        task10Report.statements.push("The function 'countWords' is implemented correctly.");
        task10Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns a string
        const testOutput = submissionModule.countWords("A. B.");
        if (typeof testOutput === "string") {
            task10Report.statements.push("Function returns a string. +1 score");
            task10Report.score += 1;
        } else {
            task10Report.statements.push("Warning: Function does not return a string.");
        }

        // ✅ Check if function has exactly one parameter
        if (submissionModule.countWords.length === 1) {
            task10Report.statements.push("Function has exactly one parameter. +1 score");
            task10Report.score += 1;
        } else {
            task10Report.statements.push("Warning: Incorrect number of parameters.");
        }

        try {
            // ✅ Test for correctness
            const test1 = submissionModule.countWords("This is a test. A short one.") === "This is a test:4";
            const test2 = submissionModule.countWords("We are doomed. This is the end. Everyone run!") === "This is the end:4";
            const test3 = submissionModule.countWords("JavaScript is amazing. Coding is fun!") === "JavaScript is amazing:3";
            const test4 = submissionModule.countWords("One two three. Four five six seven. Eight.") === "Four five six seven:4";

            if (test1 && test2 && test3 && test4) {
                task10Report.statements.push("Test passed: countWords correctly identifies longest sentence and word count. +3 score");
                task10Report.score += 3;
            } else {
                task10Report.statements.push("Test failed: Incorrect sentence or word count.");
            }

        } catch (error) {
            task10Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task10Report.statements.push("Task 10 failed: countWords function is missing or incorrect.");
    }

    return task10Report;
}

module.exports={
    testTask6,
    testTask7,
    testTask8,
    testTask9,
    testTask10
}
const {
    createTaskReport,
    isValidFunction
} = require('../testUtils/testUtils');

function testTask1(submissionModule) {
    const task1Report = createTaskReport();

    if (isValidFunction(submissionModule.testSubject)) {
        task1Report.statements.push('The function is implemented with the correct name');

        try {
            if (submissionModule.testSubject('Bob') === 'Bob is being tested') {
                task1Report.statements.push('Test: passed!');
                task1Report.score += 3;
            } else {
                task1Report.statements.push('Test failed: Incorrect return value');
            }
        } catch (error) {
            task1Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }

        if (submissionModule.testSubject.length < 1) {
            task1Report.statements.push('The function had no parameters');
        } else if (submissionModule.testSubject.length === 1) {
            task1Report.score += 2;
            task1Report.statements.push('The function had exactly one parameter +2 score');
        } else {
            task1Report.statements.push('The function had too many parameters');
        }
    } else {
        task1Report.statements.push('Task 1 failed: testSubject function is missing or incorrect');
    }

    return task1Report;
}

function testTask2(submissionModule) {
    const task2Report = createTaskReport();

    if (isValidFunction(submissionModule.addNumbers)) {
        task2Report.statements.push("The function 'addNumbers' is implemented correctly.");
        task2Report.score += 1; // ✅ Function exists

        if (submissionModule.addNumbers.length === 2) {
            task2Report.statements.push("Function has exactly two parameters. +1 score");
            task2Report.score += 1;
        } else {
            task2Report.statements.push("Warning: Function does not have exactly two parameters.");
        }

        try {
            //Ensure function returns *some* value
            const testOutput = submissionModule.addNumbers(1, 1);
            if (typeof testOutput !== "undefined") {
                task2Report.statements.push("Function returns a value. +1 score");
                task2Report.score += 1;
            } else {
                task2Report.statements.push("Warning: Function does not return a value.");
            }

            //Check full correctness of math
            if (
                submissionModule.addNumbers(2, 3) === 5 &&
                submissionModule.addNumbers(-1, -1) === -2 &&
                submissionModule.addNumbers(1.5, 2.5) === 4
            ) {
                task2Report.statements.push("Math is correct for all test cases. +3 score");
                task2Report.score += 3;
            } else {
                task2Report.statements.push("Test failed: Incorrect math output.");
            }

        } catch (error) {
            task2Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }

    } else {
        task2Report.statements.push("Task 2 failed: addNumbers function is missing or incorrectly implemented.");
    }

    return task2Report;
}

function testTask3(submissionModule) {
    const task3Report = createTaskReport();

    if (isValidFunction(submissionModule.isEven)) {
        task3Report.statements.push("The function 'isEven' is implemented correctly.");
        task3Report.score += 1; // ✅ Function exists

        // ✅ Check if the function returns a boolean value
        const testOutput = submissionModule.isEven(2);
        if (typeof testOutput === "boolean") {
            task3Report.statements.push("Function returns a boolean value. +1 score");
            task3Report.score += 1;
        } else {
            task3Report.statements.push("Warning: Function does not return a boolean.");
        }

        // ✅ Check if function has exactly one parameter
        if (submissionModule.isEven.length === 1) {
            task3Report.statements.push("Function has exactly one parameter. +1 score");
            task3Report.score += 1;
        } else {
            task3Report.statements.push("Warning: Function does not have exactly one parameter.");
        }

        try {
            // ✅ Test for correctness with various cases
            if (
                submissionModule.isEven(2) === true &&
                submissionModule.isEven(3) === false &&
                submissionModule.isEven(0) === true &&
                submissionModule.isEven(-4) === true &&
                submissionModule.isEven(-3) === false
            ) {
                task3Report.statements.push("Test passed: isEven correctly identifies even and odd numbers. +3 score");
                task3Report.score += 3;
            } else {
                task3Report.statements.push("Test failed: Function did not return correct results for all test cases.");
            }

        } catch (error) {
            task3Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }

    } else {
        task3Report.statements.push("Task 3 failed: isEven function is missing or incorrectly implemented.");
    }

    return task3Report;
}

function testTask4(submissionModule) {
    const task4Report = createTaskReport();

    if (isValidFunction(submissionModule.multiplyByTwo)) {
        task4Report.statements.push("The function 'multiplyByTwo' is implemented correctly.");
        task4Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns a number
        const testOutput = submissionModule.multiplyByTwo(2);
        if (typeof testOutput === "number") {
            task4Report.statements.push("Function returns a number. +1 score");
            task4Report.score += 1;
        } else {
            task4Report.statements.push("Warning: Function does not return a number.");
        }

        // ✅ Check if function has exactly one parameter
        if (submissionModule.multiplyByTwo.length === 1) {
            task4Report.statements.push("Function has exactly one parameter. +1 score");
            task4Report.score += 1;
        } else {
            task4Report.statements.push("Warning: Incorrect number of parameters.");
        }

        try {
            // ✅ Test for correctness
            if (
                submissionModule.multiplyByTwo(2) === 4 &&
                submissionModule.multiplyByTwo(-3) === -6 &&
                submissionModule.multiplyByTwo(0) === 0 &&
                submissionModule.multiplyByTwo(1.5) === 3
            ) {
                task4Report.statements.push("Test passed: multiplyByTwo correctly multiplies values by 2. +3 score");
                task4Report.score += 3;
            } else {
                task4Report.statements.push("Test failed: Incorrect multiplication output.");
            }

        } catch (error) {
            task4Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task4Report.statements.push("Task 4 failed: multiplyByTwo function is missing or incorrect.");
    }

    return task4Report;
}

function testTask5(submissionModule) {
    const task5Report = createTaskReport();

    if (isValidFunction(submissionModule.doubleSum)) {
        task5Report.statements.push("The function 'doubleSum' is implemented correctly.");
        task5Report.score += 1; // ✅ Function exists

        // ✅ Check if function returns a number
        const testOutput = submissionModule.doubleSum(2, 3);
        if (typeof testOutput === "number") {
            task5Report.statements.push("Function returns a number. +1 score");
            task5Report.score += 1;
        } else {
            task5Report.statements.push("Warning: Function does not return a number.");
        }

        // ✅ Check if function has exactly two parameters
        if (submissionModule.doubleSum.length === 2) {
            task5Report.statements.push("Function has exactly two parameters. +1 score");
            task5Report.score += 1;
        } else {
            task5Report.statements.push("Warning: Incorrect number of parameters.");
        }

        try {
            // ✅ Test for correctness
            if (
                submissionModule.doubleSum(2, 3) === 10 &&
                submissionModule.doubleSum(-1, 4) === 6 &&
                submissionModule.doubleSum(0, 0) === 0 &&
                submissionModule.doubleSum(1.5, 2.5) === 8
            ) {
                task5Report.statements.push("Test passed: doubleSum correctly doubles values and sums them. +3 score");
                task5Report.score += 3;
            } else {
                task5Report.statements.push("Test failed: Incorrect output.");
            }

        } catch (error) {
            task5Report.statements.push(`Test failed: Function threw an error - ${error.message}`);
        }
    } else {
        task5Report.statements.push("Task 5 failed: doubleSum function is missing or incorrect.");
    }

    return task5Report;
}

module.exports={
    testTask1,
    testTask2,
    testTask3,
    testTask4,
    testTask5
}
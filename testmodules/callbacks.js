const { createTaskReport, isValidFunction } = require("../testUtils/testUtils");

function testTask11(submissionModule) {
    const task11Report = createTaskReport();
    let wasCalled = false;
    let callBackMessage;

    if (!isValidFunction(submissionModule.executeCallback)) {
        task11Report.statements.push("Task 11 failed: executeCallback function is missing or incorrect.");
    } else {
        try {
            // ✅ Spy on callback execution
            function spyCallback(message) {
                callBackMessage = message;
                wasCalled = true;
            }

            const testMessage = "Hello from test!";
            submissionModule.executeCallback(testMessage, spyCallback);
            
            if (!wasCalled) {
                task11Report.statements.push("Test 1 - failed: Callback function was not executed.");
            } else if(testMessage===callBackMessage){
                task11Report.statements.push("Test 1 - passed: Callback function was correctly executed");
                task11Report.score += 4;
            }

            try {
                submissionModule.executeCallback(testMessage, "not a function");
                task11Report.statements.push("Test 2 - passed: Errorhandling implemented");
                task11Report.score += 2;
            } catch (error) {
                task11Report.statements.push("Test 2 - failed: No try / catch on the callback");
            }
        } catch (error) {
            task11Report.statements.push(`Test failed: Function threw an unexpected error - ${error.message}`);
        }
    }

    return task11Report;
}


function testTask12(submissionModule) {
    const task12Report = createTaskReport();
    let callCount = 0;

    if (!isValidFunction(submissionModule.serialExecutor)) {
        task12Report.statements.push("Task 12 failed: serialExecutor function is missing or incorrect.");
    } else {
        try {
            function spyCallback() {
                callCount++;
            }

            const testCount = 5;
            submissionModule.serialExecutor(testCount, spyCallback);

            if (callCount !== testCount) {
                task12Report.statements.push(`Test 1 - failed: Callback was called ${callCount} times instead of ${testCount}.`);
            } else {
                task12Report.statements.push(`Test 1 - passed: Callback was called ${testCount} times correctly.`);
                task12Report.score += 4;
            }
            try {
                submissionModule.serialExecutor(testCount, "not a function");
                task12Report.statements.push("Test 2 - Passed: Error handling implemented");
                task12Report.score += 2;
            } catch (error) {
                task12Report.statements.push("Test 2 - failed: Error handling not implemented.");
            }
        } catch (error) {
            task12Report.statements.push(`Test failed: Function threw an unexpected error - ${error.message}`);
        }
    }
    return task12Report;
}

function testTask13(submissionModule) {
    const task13Report = createTaskReport();
    let callCount = 0;

    if (!isValidFunction(submissionModule.applyToEach)) {
        task13Report.statements.push("Task 13 failed: applyToEach function is missing or incorrect.");
    } else {
        try {
            const testArray = [1, 2, 3, 4, 5];

            function spyCallback(value) {
                callCount++;
            }

            submissionModule.applyToEach(testArray, spyCallback);

            if (callCount !== testArray.length) {
                task13Report.statements.push(`Test 1 - failed: Callback was called ${callCount} times instead of ${testArray.length}.`);
            } else {
                task13Report.statements.push(`Test 1 - passed: Callback was called ${testArray.length} times correctly.`);
                task13Report.score += 4;
            }

            let errorThrown = false;
            try {
                submissionModule.applyToEach(testArray, "not a function");
                task13Report.statements.push("Test 2 - passed: Error handling implemented.");
            } catch (error) {
                task13Report.statements.push("Test 2 - failed: Function did not handle invalid callbacks.");
                task13Report.score += 2;
            }

        } catch (error) {
            task13Report.statements.push(`Test failed: Function threw an unexpected error - ${error.message}`);
        }
    }

    return task13Report;
}

module.exports = { testTask11, testTask12, testTask13 };

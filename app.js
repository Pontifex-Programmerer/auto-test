const fileHandler = require('./handlers/fileHandler');

const {
    testTask1,
    testTask2,
    testTask3,
    testTask4,
    testTask5
} = require('./testmodules/basic');

const {
    testTask6,
    testTask7,
    testTask8,
    testTask9,
    testTask10
} = require('./testmodules/strings');

const {
    testTask11,
    testTask12,
    testTask13
} = require('./testmodules/callbacks');
function main(){
    const submissions = fileHandler.getSubmissionFilePaths();

    for(let submission of submissions){
        try {

            let submissionModule = require(submission);   
            testSubmissionModule(submissionModule);
        } catch(error){
            console.error(`\nError loading: ${submission}`)
            console.error(error.message, '\n')
        }
    }
}

function testSubmissionModule(submissionModule){
    const reportCard = createReportCard(submissionModule.name);
    reportCard.tasks['task1'] = testTask1(submissionModule);
    reportCard.tasks['task2'] = testTask2(submissionModule);
    reportCard.tasks['task3'] = testTask3(submissionModule);
    reportCard.tasks['task4'] = testTask4(submissionModule);
    reportCard.tasks['task5'] = testTask5(submissionModule);
    reportCard.tasks['task6'] = testTask6(submissionModule);
    reportCard.tasks['task7'] = testTask7(submissionModule);
    reportCard.tasks['task8'] = testTask8(submissionModule);
    reportCard.tasks['task9'] = testTask9(submissionModule);
    reportCard.tasks['task10'] = testTask10(submissionModule);
    reportCard.tasks['task11'] = testTask11(submissionModule);
    reportCard.tasks['task12'] = testTask12(submissionModule);
    reportCard.tasks['task13'] = testTask13(submissionModule);

    reportCard.score = Object.values(reportCard.tasks).reduce((sum, task) => sum + task.score, 0);
    for(task in reportCard.tasks){
        console.log(reportCard.tasks[task]);
    }
    fileHandler.writeReportJson(reportCard);
}

function createReportCard(name) {
    return {
        name,
        score:0,
        tasks:{}
    }
}


main();
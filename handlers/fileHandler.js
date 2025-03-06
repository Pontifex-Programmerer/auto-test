const fs = require('fs');
const path = require('path');

const SUBMISSION_PATH = path.join(__dirname,'..','submissions');
const REPORT_PATH = path.join(__dirname, '..', 'reports');


/**
 * @returns an array containing the absolute path to the files
 *  found in the 'submissions' folder
 */
const getSubmissionFilePaths = ()=>{
    const filenames = fs.readdirSync(SUBMISSION_PATH);
    const absolutePaths = filenames.map(filename => path.join(SUBMISSION_PATH, filename));
    return absolutePaths;
}

const getReportFilenames = () => {
    const fileNames = fs.readdirSync(REPORT_PATH);
    return fileNames;
}

const getReportFilePaths = () => {
    const fileNames = getReportFileNames();
    const paths = fileNames.map(fileName => path.join(REPORT_PATH,fileName));
    return paths;
}
const writeReportJson = (reportCard) => {
    if(reportCard?.name !== 'undefined'){
        const fileName = path.join(REPORT_PATH, `${reportCard.name}.json`);
        console.info('Writing file', fileName)
        reportCard = JSON.stringify(reportCard);
        fs.writeFileSync(fileName, reportCard, {encoding:"utf-8"});
    }
}
module.exports={
    getSubmissionFilePaths,
    writeReportJson,
    getReportFilenames
}
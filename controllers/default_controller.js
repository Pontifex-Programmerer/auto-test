const fh = require('../handlers/fileHandler');

const index = (req,res) => {
    let names = fh.getReportFilenames();
    names = names.map(name => name.split('.')[0]);
    res.render('index', {names});
}

const namedReport = (req,res)=>{
    let reportCard=null;
    const name = req.params.name;
    reportCard = fh.getReport(name);
    console.log(reportCard)
    if(reportCard){
        reportCard = JSON.parse(reportCard);
        res.render('named-report', {reportCard});
    } else {
        console.error('Tried accessing a file that did not exist');
        res.render('named-report',{reportCard,name});
    }
    console.log('reportcard', reportCard)
}

module.exports={
    index,
    namedReport
}
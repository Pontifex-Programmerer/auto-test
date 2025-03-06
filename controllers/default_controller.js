const fh = require('../handlers/fileHandler');

const index = (req,res) => {
    let names = fh.getReportFilenames();
    names = names.map(name => name.split('.')[0]);
    res.render('index', {names});
}

const namedReport = (req,res)=>{
    reportCard=null;
    console.log(res.params.name)
    res.render('named-report', {reportCard});
}

module.exports={
    index,
    namedReport
}
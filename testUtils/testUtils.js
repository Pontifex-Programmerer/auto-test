
function isValidFunction(input){
    return typeof input === 'function';
}


function createTaskReport(){
    return {
        score: 0,
        statements: []
    }
}

module.exports={
    createTaskReport,
    isValidFunction
}
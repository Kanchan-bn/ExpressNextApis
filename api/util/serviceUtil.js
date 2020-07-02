
module.exports.sortItems = items => {
    return items.sort((item1, item2) => item2.percentage - item1.percentage);
}

module.exports.getResultString = arrayObject => {
    let resultString = '';

    if(arrayObject.length == 0) {
        return resultString;
    }
    
    const objLength = Object.keys(arrayObject[0]).length;
    arrayObject.map(obj => {
        for(let i=0; i< objLength; i++) {
            resultString += Object.values(obj)[i];
            if(i == 0) {
                resultString += '% -';
            }
            if(i < objLength - 1){
                resultString += ' ';
            }
        }
        resultString += '\n ';  
    });
    console.log(resultString);
    return resultString;
}

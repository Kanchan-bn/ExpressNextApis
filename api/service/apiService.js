const ServiceUtil = require('../util/serviceUtil');

module.exports.wineYearBreakdown = data => {
    let reducedArray = data.components.reduce((acc, item) => {
        const foundIndex = acc.findIndex(accitem => accitem.year === item.year);
        if(foundIndex != -1) {
            acc[foundIndex].percentage += item.percentage;
        }else{
            acc.push({"percentage": item.percentage, "year": item.year});
        }
        return ServiceUtil.sortItems(acc);
    },[]);

    return ServiceUtil.getResultString(reducedArray);
}

module.exports.wineVarietyBreakDown = data => {
    let reducedArray = data.components.reduce((acc, item) => {
        const foundIndex = acc.findIndex(accitem => accitem.variety === item.variety);
        if(foundIndex != -1) {
            acc[foundIndex].percentage += item.percentage;
        }else{
            acc.push({"percentage": item.percentage, "variety": item.variety});
        }
        return ServiceUtil.sortItems(acc);
    },[]);

    return ServiceUtil.getResultString(reducedArray);
}

module.exports.wineRegionBreakDown = data => {
    let reducedArray = data.components.reduce((acc, item) => {
        const foundIndex = acc.findIndex(accitem => accitem.region === item.region);
        if(foundIndex != -1) {
            acc[foundIndex].percentage += item.percentage;
        }else{
            acc.push({"percentage": item.percentage, "region": item.region});
        }
        return ServiceUtil.sortItems(acc);
    },[]);

    return ServiceUtil.getResultString(reducedArray);
}

module.exports.wineYearVarietyBreakDown = data => {
    let reducedArray = data.components.reduce((acc, item) => {
        const foundIndex = acc.findIndex(accitem => accitem.year === item.year && accitem.variety === item.variety);
        if(foundIndex != -1) {
            acc[foundIndex].percentage += item.percentage;
        }else{
            acc.push({"percentage": item.percentage, "year": item.year, "variety": item.variety});
        }
        return ServiceUtil.sortItems(acc);
    },[]);

    return ServiceUtil.getResultString(reducedArray);
}
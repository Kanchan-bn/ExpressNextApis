const Service = require('../service/apiService');
const data = require('../util/11YVCHAR001.json');

module.exports = (app) => {
    app.get('/getYearBreakdown', (req, res) => {
        res.json(Service.wineYearBreakdown(data));
    });

    app.get('/getVarietyBreakdown', (req, res) => {
        res.json(Service.wineVarietyBreakDown(data));
    });

    app.get('/getRegionBreakdown', (req, res) => {
        res.json(Service.wineRegionBreakDown(data));
    });

    app.get('/getYearAndVarietyBreakdown', (req, res) => {
        res.json(Service.wineYearVarietyBreakDown(data));
    });

}
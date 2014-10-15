/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/labdetails/labdetails.server.rqh.js');

module.exports = function(app){
    app.route('/labdetails')
        .get(rqh.getLabDetails)
        .post(rqh.createLabDetail);

    app.route('/labdetails/labdetails_id')
        .get(rqh.getLabDetail)
        .put(rqh.updateLabDetail)
        .delete(rqh.removeLabDetail);

    //Child element routes

    app.route('/labdetails/:labdetails_id/testcriteria/:testcriteria_id')
        .get(rqh.getTestCriteriasByLabDetail)
        .post(rqh.createTestCriteriaByLabDetail)
        .put(rqh.updateTestCriteriaByLabDetail)
        .delete(rqh.removeTestCriteriaByLabDetail);

    app.route('/labdetails/:labdetails_id/viruslevel/:viruslevel_id')
        .get(rqh.getVirusLevelsByLabDetail)
        .post(rqh.createVirusLevelByLabDetail)
        .put(rqh.updateVirusLevelByLabDetail)
        .delete(rqh.removeVirusLevelByLabDetail);

};
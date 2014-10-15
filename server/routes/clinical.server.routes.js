/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/clinicalevaluation/clinical.server.rqh.js');

module.exports = function(app){
    app.route('/clinical')
        .get(rqh.getClinicals)
        .post(rqh.createClinical);

    app.route('/clinical/clinical_id')
        .get(rqh.getClinical)
        .put(rqh.updateClinical)
        .delete(rqh.removeClinical);

    //Child element routes

    app.route('/clinical/:clinical_id/physicalexam/:physicalexam_id')
        .get(rqh.getPhysicalExamsByClinical)
        .post(rqh.createPhysicalExamByClinical)
        .put(rqh.updatePhysicalExamByClinical)
        .delete(rqh.removePhysicalExamByClinical);

};
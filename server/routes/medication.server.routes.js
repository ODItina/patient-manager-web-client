/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/medicationadministration/medication.server.rqh.js');

module.exports = function(app){
    app.route('/medication')
        .get(rqh.getMedications)
        .post(rqh.createMedication);

    app.route('/medication/medication_id')
        .get(rqh.getMedication)
        .put(rqh.updateMedication)
        .delete(rqh.removeMedication);

    //Child element routes

    app.route('/medication/:medication_id/drugregiment/:drugregiment_id')
        .get(rqh.getDrugRegimentsByMedication)
        .post(rqh.createDrugRegimentByMedication)
        .put(rqh.updateDrugRegimentByMedication)
        .delete(rqh.removeDrugRegimentByMedication);

};
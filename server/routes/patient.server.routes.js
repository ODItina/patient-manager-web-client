/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var rqh = require('./../requesthandlers/patient/patient.server.rqh.js');

module.exports = function(app){
    app.route('/patient')
        .get(rqh.getPatients)
        .post(rqh.createPatient);

    app.route('/patient/patient_id')
        .get(rqh.getPatient)
        .put(rqh.updatePatient)
        .delete(rqh.removePatient);


    //Child element routes

    app.route('/patient/:patient_id/addressinfo/:addressinfo_id')
        .get(rqh.getAddressInfosByPatient)
        .post(rqh.createAddressInfoByPatient)
        .put(rqh.updateAddressInfoByPatient)
        .delete(rqh.removeAddressInfoByPatient);

    app.route('/patient/:patient_id/contactperson/:contactperson_id')
        .get(rqh.getContactPersonsByPatient)
        .post(rqh.createContactPersonByPatient)
        .put(rqh.updateContactPersonByPatient)
        .delete(rqh.removeContactPersonByPatient);

    app.route('/patient/:patient_id/phonecontact/:phonecontact_id')
        .get(rqh.getPhoneContactsByPatient)
        .post(rqh.createPhoneContactByPatient)
        .put(rqh.updatePhoneContactByPatient)
        .delete(rqh.removePhoneContactByPatient);

    app.route('/patient/:patient_id/pregnancyinfo/:pregnancyinfo_id')
        .get(rqh.getPregnancyInfosByPatient)
        .post(rqh.createPregnancyInfoByPatient)
        .put(rqh.updatePregnancyInfoByPatient)
        .delete(rqh.removePregnancyInfoByPatient);

    app.route('/patient/:patient_id/drugallergy/:drugallergy_id')
        .get(rqh.getDrugAllergiesByPatient)
        .post(rqh.createDrugAllergyByPatient)
        .put(rqh.updateDrugAllergyByPatient)
        .delete(rqh.removeDrugAllergyByPatient);

    app.route('/patient/:patient_id/medicalhistory/:medicalhistory_id')
        .get(rqh.getMedicalHistoriesByPatient)
        .post(rqh.createMedicalHistoryByPatient)
        .put(rqh.updateMedicalHistoryByPatient)
        .delete(rqh.removeMedicalHistoryByPatient);
};
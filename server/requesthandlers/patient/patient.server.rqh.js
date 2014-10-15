/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var patientInfo = require('patient.info.domain');

//Create
exports.createPatient = function(req, res){
    var data = req.body;
    patientInfo.write.createPatient(data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};

//Read
exports.getPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

exports.getPatients = function(req, res){
    patientInfo.read.getPatients(
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update
exports.updatePatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.updatePatient({_id:Id}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
            else{
                res.json({
                    message:'update operation not successful'
                });
            }
        });
};

//Delete
exports.removePatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.write.removePatient({_id:Id},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Create Sub docs1
exports.createAddressInfoByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.createAddressInfo({patient:{_id:Id}}, data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};
//Read Sub docs
exports.getAddressInfosByPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id}, 'address_info',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub docs
exports.updateAddressInfoByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var addressInfoId = req.params.address_info.Id;
    patientInfo.write.updateAddressInfo({patient:{_id:Id}, _id:addressInfoId}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Remove Sub docs
exports.removeAddressInfoByPatient= function(req, res){
    var Id = req.params.Id;
    var addressInfoId = req.params.address_info.Id;
    patientInfo.write.removeAddressInfo({patient:{_id:Id}, _id:addressInfoId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};



//Create Sub docs2
exports.createContactPersonByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.createContactPerson({patient:{_id:Id}}, data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};
//Read Sub docs
exports.getContactPersonsByPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id}, 'contact_person',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub docs
exports.updateContactPersonByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var contactPersonId = req.params.contact_person.Id;
    patientInfo.write.updateContactPerson({patient:{_id:Id}, _id:contactPersonId}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Remove Sub docs
exports.removeContactPersonByPatient= function(req, res){
    var Id = req.params.Id;
    var contactPersonId = req.params.contact_person.Id;
    patientInfo.write.removeContactPerson({patient:{_id:Id}, _id:contactPersonId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};


//Create Sub docs3
exports.createDrugAllergyByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.createDrugAllergy({patient:{_id:Id}}, data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};
//Read Sub docs
exports.getDrugAllergiesByPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id}, 'drug_allergy',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub docs
exports.updateDrugAllergyByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var drugAllergyId = req.params.drug_allergy.Id;
    patientInfo.write.updateDrugAllergy({patient:{_id:Id}, _id:drugAllergyId}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Remove Sub docs
exports.removeDrugAllergyByPatient= function(req, res){
    var Id = req.params.Id;
    var drugAllergyId = req.params.drug_allergy.Id;
    patientInfo.write.removeDrugAllergy({patient:{_id:Id}, _id:drugAllergyId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};


//Create Sub docs4
exports.createMedicalHistoryByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.createMedicalHistory({patient:{_id:Id}}, data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};
//Read Sub docs
exports.getMedicalHistoriesByPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id}, 'medical_history',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub docs
exports.updateMedicalHistoryByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var medicalHistoryId = req.params.medical_history.Id;
    patientInfo.write.updateMedicalHistory({patient:{_id:Id}, _id:medicalHistoryId}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Remove Sub docs
exports.removeMedicalHistoryByPatient= function(req, res){
    var Id = req.params.Id;
    var medicalHistoryId = req.params.medical_history.Id;
    patientInfo.write.removeMedicalHistory({patient:{_id:Id}, _id:medicalHistoryId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};


//Create Sub docs5
exports.createPhoneContactByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.createPhoneContact({patient:{_id:Id}}, data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};
//Read Sub docs
exports.getPhoneContactsByPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id}, 'phone_contact',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub docs
exports.updatePhoneContactByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var phoneContactId = req.params.phone_contact.Id;
    patientInfo.write.updatePhoneContact({patient:{_id:Id}, _id:phoneContactId}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Remove Sub docs
exports.removePhoneContactByPatient= function(req, res){
    var Id = req.params.Id;
    var phoneContactId = req.params.phone_contact.Id;
    patientInfo.write.removePhoneContact({patient:{_id:Id}, _id:phoneContactId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};


//Create Sub docs6
exports.createPregnancyInfoByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    patientInfo.write.createPregnancyInfo({patient:{_id:Id}}, data,
    function(err, result){
        if(err){
            console.log(err);
            res.json(err);
        }
        if(result){
            res.json(result);
        }
    });
};
//Read Sub docs
exports.getPregnancyInfosByPatient = function(req, res){
    var Id = req.params.Id;
    patientInfo.read.getPatient({_id:Id}, 'pregnancy_info',
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Update Sub docs
exports.updatePregnancyInfoByPatient = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var pregnancyInfoId = req.params.pregnancy_info.Id;
    patientInfo.write.updatePregnancyInfo({patient:{_id:Id}, _id:pregnancyInfoId}, data,
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};

//Remove Sub docs
exports.removePregnancyInfoByPatient= function(req, res){
    var Id = req.params.Id;
    var pregnancyInfoId = req.params.pregnancy_info.Id;
    patientInfo.write.removePregnancyInfo({patient:{_id:Id}, _id:pregnancyInfoId},
        function(err, result){
            if(err){
                console.log(err);
                res.json(err);
            }
            if(result){
                res.json(result);
            }
        });
};
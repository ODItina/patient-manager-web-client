/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var medicationAdmin = require('medication.administration.domain');

//Create
exports.createMedication = function(req, res){
    var data = req.body;
    medicationAdmin.write.createMedication(data,
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
exports.getMedication = function(req, res){
    var Id = req.params.Id;
    medicationAdmin.read.getMedication({patient_id:Id},
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

exports.getMedications = function(req, res){
    medicationAdmin.read.getMedications(
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
exports.updateMedication = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    medicationAdmin.write.updateMedication({patient_id:Id}, data,
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
exports.removeMedication = function(req, res){
    var Id = req.params.Id;
    medicationAdmin.write.removeMedication({patient_id:Id},
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
exports.createDrugRegimentByMedication = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    medicationAdmin.write.createDrugRegiment({medication:{patient_id:Id}}, data,
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
exports.getDrugRegimentsByMedication = function(req, res){
    var Id = req.params.Id;
    medicationAdmin.read.getMedication({patient_id:Id}, 'drug_regiment',
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
exports.updateDrugRegimentByMedication = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var drugRegimentId = req.params.drug_regiment.Id;
    medicationAdmin.write.updateDrugRegiment({medication:{patient_id:Id}, patient_id:drugRegimentId}, data,
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
exports.removeDrugRegimentByMedication= function(req, res){
    var Id = req.params.Id;
    var drugRegimentId = req.params.drug_regiment.Id;
    medicationAdmin.write.removeDrugRegiment({medication:{patient_id:Id}, patient_id:drugRegimentId},
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
/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var clinicalEval = require('clinical.evaluation.domain');

//Create
exports.createClinical = function(req, res){
    var data = req.body;
    clinicalEval.write.createClinical(data,
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
exports.getClinical = function(req, res){
    var Id = req.params.Id;
    clinicalEval.read.getClinical({patient_id:Id},
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

exports.getClinicals = function(req, res){
    clinicalEval.read.getClinicals(
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
exports.updateClinical = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    clinicalEval.write.updateClinical({patient_id:Id}, data,
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
exports.removeClinical = function(req, res){
    var Id = req.params.Id;
    clinicalEval.write.removeClinical({patient_id:Id},
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
exports.createPhysicalExamByClinical = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    clinicalEval.write.createPhysicalExam({clinical:{patient_id:Id}}, data,
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
exports.getPhysicalExamsByClinical = function(req, res){
    var Id = req.params.Id;
    clinicalEval.read.getClinical({patient_id:Id}, 'physical_exam',
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
exports.updatePhysicalExamByClinical = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var physicalExamId = req.params.physical_exam.Id;
    clinicalEval.write.updatePhysicalExam({clinical:{patient_id:Id}, patient_id:physicalExamId}, data,
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
exports.removePhysicalExamByClinical= function(req, res){
    var Id = req.params.Id;
    var physicalExamId = req.params.physical_exam.Id;
    clinicalEval.write.removePhysicalExam({clinical:{patient_id:Id}, patient_id:physicalExamId},
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
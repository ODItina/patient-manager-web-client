/**
 * Created by KP_TerminalUser2 on 15/10/2014.
 */
'use strict';
var labDetail = require('lab.details.domain');

//Create
exports.createLabDetail = function(req, res){
    var data = req.body;
    labDetail.write.createLabDetail(data,
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
exports.getLabDetail = function(req, res){
    var Id = req.params.Id;
    labDetail.read.getLabDetail({patient_id:Id},
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

exports.getLabDetails = function(req, res){
    labDetail.read.getLabDetails(
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
exports.updateLabDetail = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    labDetail.write.updateLabDetail({patient_id:Id}, data,
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
exports.removeLabDetail = function(req, res){
    var Id = req.params.Id;
    labDetail.write.removeLabDetail({patient_id:Id},
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
exports.createVirusLevelByLabDetail = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    labDetail.write.createVirusLevel({medication:{patient_id:Id}}, data,
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
exports.getVirusLevelsByLabDetail = function(req, res){
    var Id = req.params.Id;
    labDetail.read.getLabDetail({patient_id:Id}, 'virus_level',
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
exports.updateVirusLevelByLabDetail = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var virusLevelId = req.params.virus_level.Id;
    labDetail.write.updateVirusLevel({medication:{patient_id:Id}, patient_id:virusLevelId}, data,
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
exports.removeVirusLevelByLabDetail= function(req, res){
    var Id = req.params.Id;
    var virusLevelId = req.params.virus_level.Id;
    labDetail.write.removeVirusLevel({medication:{patient_id:Id}, patient_id:virusLevelId},
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
exports.createTestCriteriaByLabDetail = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    labDetail.write.createTestCriteria({medication:{patient_id:Id}}, data,
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
exports.getTestCriteriasByLabDetail = function(req, res){
    var Id = req.params.Id;
    labDetail.read.getLabDetail({patient_id:Id}, 'test_criteria',
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
exports.updateTestCriteriaByLabDetail = function(req, res){
    var data = req.body;
    var Id = req.params.Id;
    var testCriteriaId = req.params.test_criteria.Id;
    labDetail.write.updateTestCriteria({medication:{patient_id:Id}, patient_id:testCriteriaId}, data,
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
exports.removeTestCriteriaByLabDetail= function(req, res){
    var Id = req.params.Id;
    var testCriteriaId = req.params.test_criteria.Id;
    labDetail.write.removeTestCriteria({medication:{patient_id:Id}, patient_id:testCriteriaId},
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
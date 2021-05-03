const express = require('express');
const router = express.Router();
const enroll = require('../schema/enroll')



router.get('/enrl', function(req, res){
    enroll.find().then(function(enrollList){
        res.send(enrollList)
    })
})

router.post('/enrl', function(req, res){
    enroll.create(req.body).then(function(enrollList){
        res.send(enrollList)
    })
    // res.send('this is from post')
})

router.put('/enrl/:id', function(req, res){
    enroll.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        enroll.findOne({_id:req.params.id}).then(function(enrollList){
            res.send(enrollList)
        })
    })
    // res.send('this is from put')
})

router.delete('/enrl/:id', function(req, res){
    enroll.findByIdAndDelete({_id:req.params.id}).then(function(enrollList){
        res.send(enrollList)
    })
    // res.send('this is from delete')
})


module.exports = router;
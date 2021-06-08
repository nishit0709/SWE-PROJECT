const express = require('express');
const router= express.Router();
const ReviewModel = require('../models/ReviewModel')

router.route('/:id')
  .get(async(req,res)=>{
      event_id = req.params.id
      reviews = await ReviewModel.find({event_id:event_id})
      console.log(reviews[0].feedback.length)
    res.render('abtEvent',{reviews})
  })
  .post((req,res)=>{
  
})

module.exports = router;

const express = require('express');
const router= express.Router();
const ReviewModel = require('../models/ReviewModel')
const EventModel = require('../models/EventModel')
router.route('/:id')
  .get(async(req,res)=>{
    event_id = req.params.id
    eventID = await EventModel.findOne({_id:event_id})
    res.render('give_Review',{eventID})
  })
  .post(async(req,res)=>{
    let writer = req.body.name
    let review = req.body.review

    console.log(writer)
    console.log(review)

    await ReviewModel.updateMany(
      {event_id:req.params.id},
      { $push: {feedback_writers: writer} }, 
      { $push: { feedback: review } },
    );
    res.redirect('/dashboard')
})

module.exports = router;

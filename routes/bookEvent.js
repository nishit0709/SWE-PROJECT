const express = require('express');
const router= express.Router();
const EventModel = require('../models/EventModel')
const UserModel = require('../models/UserModel')
const ReviewModel = require('../models/ReviewModel')
router.route('/')
  .get(async(req,res)=>{
    eventID= await EventModel.find({})
    userID = await UserModel.find({user_id:req.session.user})
    console.log(eventID)
    res.render('book_event',{eventID})
  })
  .post(async(req,res)=>{
    const{
      event_name,
      date,
      time,
      num_of_tickets
    } = req.body
    eventID = await EventModel.findOne({event_name:event_name})
    let tickets_left =  eventID.tickets_left - parseInt(num_of_tickets,10)
    await UserModel.updateOne({_id:req.session.user},{$push : {event_booked : eventID._id}})
    await EventModel.updateOne({event_name:event_name},{$set: { tickets_left : tickets_left}})
    await ReviewModel.updateOne({event_id:eventID._id},{$push: { participants : userID._id}})
    res.redirect('/')
  })

module.exports = router;

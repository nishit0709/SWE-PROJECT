const express = require('express');
const router= express.Router();
const UserModel = require('../models/UserModel')
const EventModel = require('../models/EventModel');


router.route('/')
  .get(async(req,res)=>{
        userID = req.session.user
        user = await UserModel.findOne({_id:userID})
        event_booked = await EventModel.find({_id : user.event_booked})
        event_created  = await EventModel.find({_id : user.event_created})
    res.render('dashboard',{user,event_booked,event_created})
  })
  .post((req,res)=>{
  
})

module.exports = router;

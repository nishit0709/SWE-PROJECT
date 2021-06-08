const express = require('express');
const router= express.Router();
const EventModel = require('../models/EventModel');

router.route('/:event_id')
  .get(async(req,res)=>{
    let event_id = await req.params.event_id;
    let eventDetails = await EventModel.findOne({_id : event_id}); 
    console.log(eventDetails);
    res.render('view_event',{eventDetails: eventDetails });
  })
  .post((req,res)=>{

  })

module.exports = router;

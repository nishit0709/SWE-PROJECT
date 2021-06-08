const express = require('express');
const router= express.Router();
const UserModel = require('../models/UserModel')
const EventModel = require('../models/EventModel');
router.route('/')
  .get(async(req,res)=>{
    //get the event list to be displayed
    let eventList = await EventModel.find({});
    res.render('home_page',{eventList : eventList, isLoggedIn:req.session.isAuth, req:req})
  })
  .post((req,res)=>{
    req.session.destroy()
  })

module.exports = router;

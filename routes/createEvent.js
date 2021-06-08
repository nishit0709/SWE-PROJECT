const express = require('express');
const router= express.Router();
const EventModel = require('../models/EventModel');
const UserModel = require('../models/UserModel');
const ReviewModel = require('../models/ReviewModel');
const multer = require('multer');
const { data } = require('jquery');

const FileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, 'uploads')
  },
  filename: (req,file,cb) => {
    cb(null, Date.now() + '__' + file.originalname);
  },
});

const upload = multer({ storage: FileStorageEngine })

router.route('/')
  .get((req,res)=>{
    res.render('create_event');
  })
  .post(upload.single('images'),async(req,res)=>{

    
    var data_event = new EventModel({
      event_name : req.body.event_name,
      org_phno : req.body.phno,
      event_date : req.body.date,
      time : req.body.time,
      organizer_id : req.session.user,
      organizer_name : req.body.organizer_name,
      total_tickets : req.body.max_tickets,
      tickets_left : req.body.max_tickets,
      ticket_cost : req.body.per_ticket_cost,
      venue : req.body.venue,
      event_sub_des : req.body.sub_description,
      description : req.body.description,
      event_images : req.file.path,
    });

    var data_review = new ReviewModel({
      event_id : data_event._id,
    });

    data_event.save((err)=>{
      if(err) throw err;
      console.log('Data saved to DB successfully');
    });
    
    data_review.save((err)=>{
      if(err) throw err;
      console.log('Data saved to DB successfully');
    });
    
    await UserModel.updateOne({_id:req.session.user},{$push : {event_created : data_event._id}},(err) => {
      if(err) throw err;
    });

    res.redirect('/');
  })


module.exports = router;

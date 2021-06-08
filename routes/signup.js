const express = require('express');
const router= express.Router();
const bcrypt = require('bcrypt');
var UserModel = require('../models/UserModel');
router.route('/')
  .get((req,res)=>{
    res.render('signup');
    //res.sendFile('/home/nishit/Desktop/Winter Semester/Software Engg/SWE_Project/Ticket_Booking/modules/signup/index.html');
  })
  .post(async(req,res)=>{
    console.log(req.body);
    user_name = req.body.username;
    let user = await UserModel.findOne({user_name});
    if(user){
      return res.redirect('/login/signup');
    }
    const hashedpwd = await bcrypt.hash(req.body.pwd,17);
    let data = new UserModel({
      fname : req.body.fname,
      lname : req.body.lname,
      age : req.body.age,
      phno : req.body.phno,
      sex : req.body.sex,
      username : req.body.username,
      pwd : hashedpwd,
      email : req.body.email
    });
    await data.save((err)=>{
      if(err) throw err;
      console.log('Data saved to DB successfully');
    });
  res.redirect('/');
});

module.exports = router;

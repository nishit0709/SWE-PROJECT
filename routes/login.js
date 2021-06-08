const express = require('express');
const router= express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModel');
router.route('/')
  .get((req,res)=>{
    res.render('login')
  })
  
  .post(async(req,res)=>{
    console.log('in login.js')
    console.log(req.body)
    console.log(req.session)

    const{username,pwd} = req.body
    let user = await UserModel.findOne({username:username});
    if(!user){
      res.redirect('/login');
    }
    const isMatch = await bcrypt.compare(pwd,user.pwd);
    if(!isMatch){
      return res.redirect('/login');
    }
    req.session.isAuth = true;
    req.session.user = user._id;
    res.redirect('/');
  
  }); 

module.exports = router;

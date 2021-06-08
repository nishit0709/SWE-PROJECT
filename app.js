const path=require('path');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const MongoDBSession = require('connect-mongodb-session')(session);
const app = express();

const mongoURL = 'mongodb+srv://swe_data:yVe28YQ425x66Zd@cluster0.yifsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


//POST request data parsing
app.use(express.static(path.join(__dirname +  '/views')));
app.use(express.static(path.join(__dirname +  '/uploads/')));
app.use(express.urlencoded({extended: false}));
app.use(express.json())
app.use(cookieParser())


mongoose
  .connect(mongoURL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then((res) => {
    console.log('Mongodb Connected');
  });

const store = new MongoDBSession({
  uri: mongoURL,
  collection: 'Session_Data'
})


const isAuth =(req,res,next) => {
  if(req.session.isAuth){
    next()
  }
  else{
    res.redirect('/login');
  }
}

app.set('view engine', 'ejs');

const homepage = require('./routes/homepage');
const login = require('./routes/login');
const signup = require('./routes/signup');
const viewEvent = require('./routes/viewEvent');
const bookEvent = require('./routes/bookEvent');
const createEvent = require('./routes/createEvent');
const dashboard = require('./routes/dashboard')
const abtEvent = require('./routes/abtEvent')
const give_Review = require('./routes/give_Review')

app.use(session({
  secret:'Secret key to sign the session',
  resave: false,
  saveUninitialized: true,
  store: store,
  proxy: true,
}))


//routing
app.use('/', homepage);
app.use('/login', login);
app.use('/login/signup', signup);
app.use('/viewEvent', viewEvent);
app.use('/bookEvent',isAuth, bookEvent);
app.use('/createEvent',isAuth, createEvent);
app.use('/dashboard',isAuth,dashboard)
app.use('/abtEvent',isAuth, abtEvent);
app.use('/giveReview',isAuth,give_Review)



const port=process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}...`));
 
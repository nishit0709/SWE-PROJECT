var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const EventModel = require('./EventModel');
var UserSchema = new Schema(
    {
        session_id : {
          type : String,
          unique : true
        },
        fname: {
          type: String,
          required: true,
          maxLength: 30
        },
        lname: {
          type: String,
          required: true,
          maxLength: 30
        },
        age : {
          type: Number,
          min:18
        },
        phno : {
          type : Number,
          required: true
        },
        sex : {
          type : String,
          enum : ['Male','Female']
        },
        username : {
          type: String,
          required: true,
          maxLength: 30,
          unique: true},
        pwd: {
          type: String,
          required: true,
          unique: true
        },
        email : {
          type: String,
          required: true,
          unique: true
        },
        event_booked : [{
          type: Schema.Types.ObjectId,
          ref : 'EventModel'
        }],
        event_created : [{
          type: Schema.Types.ObjectId,
          ref : 'EventModel'
        }]
    }
);


module.exports = mongoose.model('UserModel', UserSchema);;

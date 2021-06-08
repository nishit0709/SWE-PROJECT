var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserModel = require('./UserModel');

var EventSchema = new Schema(
    {
        event_name: {
          type: String,
          required: true,
          maxLength: 20,
          unique:true
        },
        org_phno : {
          type : Number,
          required: true
        },
        event_date: {
          type: Date,
          default: Date.now
        },
        time: {
          type: String,
          required: true
        },
        organizer_id : {
          type: Schema.Types.ObjectId,
          ref : 'UserModel'
        },
        organizer_name: String,
        total_tickets: {
          type: Number,
          required: true
        },
        tickets_left: {
          type: Number,
          required: true
        },
        ticket_cost: {
          type: Number,
          required: true
        },
        venue: {
          type: String,
          required: true
        },
        event_sub_des: {
          type: String,
          required: true,
          maxLength: 30
        },
        description: {
          type: String,
          required: true,
          maxLength: 500
        },
        event_images: [{
          type: String
        }]
    }
);

module.exports = mongoose.model('EventModel', EventSchema);

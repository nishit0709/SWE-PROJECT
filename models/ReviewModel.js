var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const EventModel = require('./EventModel');
const UserModel = require('./UserModel');
var EventReviewSchema = new Schema(
    {
        event_id: {
          type: Schema.Types.ObjectId,
          ref: 'EventModel',
          required : true,
        },
        feedback_writers: [{
          type: String,
        }],
        feedback: [{
          type: String,
          required: true,
          maxLength: 200
        }],
        participants: [{
          type: Schema.Types.ObjectId,
          ref : 'UserModel'
        }],
        attendance: [{
          type: Schema.Types.ObjectId,
          ref : 'UserModel'
        }]
    }
);

module.exports = mongoose.model('ReviewModel', EventReviewSchema);

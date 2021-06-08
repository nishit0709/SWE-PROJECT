var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserModel = require('./UserModel');
const EventModel = require('./EventModel');
var siteDataSchema = new Schema(
    {
        events: [{
          type: Schema.Types.ObjectId,
          ref : 'EventModel'
        }],
        users: [{
          type: Schema.Types.ObjectId,
          ref : 'UserModel'
        }],
        userCount: Number,
        profit: Number
      }
);

module.exports = mongoose.model('SiteModel', siteDataSchema)

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema ;

var UserSchema =  new Schema({
    email: { type: String, 
        required: [true,'name is required'], 
        unique: [true,'already exists'] },
    username:  { type: String, 
        required: [true,'name is required'], 
        unique: [true,'already exists'] },
    password: { type: String, required: true },
    created_at: Date,
    updated_at: Date
  });

  module.exports = Mongoose.model('user', UserSchema);
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema ;

var UserSchema =  new Schema({
    email: { type: String, 
        required: [true,'name is required'], 
        unique: [true,'already exists'] },
    username:  { type: String, 
        required: [true,'name is required'], 
        unique: [true,'already exists'] },
    passwordHash: { type: String, required: true },
    created_at: Date,
    updated_at: Date
  });

  module.exports = mongoose.model('user', UserSchema);
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({        //New User Schema
    user_name: {type: String},
    father_name: {type: String},
    phone_no: {type:Number},
    email_id: {type:String},
    user_id: {type: Number, unique: true},
    created_at: {type: Date, default: Date.now},
});


module.exports = mongoose.model('New User',UserSchema);     // Export the Mongoose model


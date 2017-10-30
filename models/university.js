var mongoose = require('mongoose');

var UniversitySchema = new mongoose.Schema({                          //University Schema
    university_name: {type: String},
    city: {type: String},
    state: {type:String},
    university_id: {type: Number}
});



module.exports = mongoose.model('University',UniversitySchema);         // Export the Mongoose model
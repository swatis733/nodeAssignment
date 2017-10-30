var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({   //Student Schema
    st_name: {type: String},
    stream: {type: String},
    year: {type: Number},
    st_id: {type: Number,unique: true },
    university_id: {type: Number}
});
                                                          
module.exports = mongoose.model('Student', StudentSchema);     // Export the Mongoose model
//This is the schema for the database
// There are 4 fields

let mongoose = require('mongoose');

let foodModel = mongoose.Schema({
    Food: String,
    Restaurant: String,
    Price: Number,
    Calories: Number
},
{
    collection:"food"
});
module.exports = mongoose.model('Food',foodModel);

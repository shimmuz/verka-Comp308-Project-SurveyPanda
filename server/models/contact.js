/*FIle name: contact.js
Name : Shefali Sharma
Id:  300973745
Date :April 03, 2019*/


let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);
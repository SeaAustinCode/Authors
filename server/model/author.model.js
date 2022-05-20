const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, `${PATH} must be present`],
        minlength: [3, `${PATH} must be at least 3 characters`]
    }
    } , { timestamps: true});

module.exports.Author = mongoose.model("Author", AuthorSchema);

//TYPES THAT MONGOOSE WILL TAKE 
// STRING
// Number
// DATE
// BUFFER
// BOOLEAN
// MIXED
// ObjectId
// Array
// Decimal128
// Map
// Schema

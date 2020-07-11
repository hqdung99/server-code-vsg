// Use to create Schema

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

var User = new Schema(
{
name: {
type: String,
required: [true, "name is required"],
lowercase: true,
},
email: {
type: String,
required: [true, "email is required"],
lowercase: true,
unique: true,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("User", User);

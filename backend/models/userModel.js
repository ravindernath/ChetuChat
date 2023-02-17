const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
    pic: {type:String, required:true, default:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"},
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;
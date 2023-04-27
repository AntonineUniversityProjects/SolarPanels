const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const UserSchema = new Schema({

    email:String,
    picture:String,
    username:String,
    googleId:String
});

const User = mongoose.model('users',UserSchema);
module.exports= User;
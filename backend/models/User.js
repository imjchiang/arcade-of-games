const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema(
{
    name: 
    {
        type: String,
        required: true
    },
    username:
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true
    },
    password: 
    {
        type: String,
        required: true
    },
    date: 
    {
        type: Date,
        default: Date.now()
    },
    bBombData:
    {
        type: Schema.ObjectId,
        ref: "BBombData"
    }
});

module.exports = User = mongoose.model('User', UserSchema);
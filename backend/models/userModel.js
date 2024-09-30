const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    workouts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workout'
        }
    ]
}, { timestamps: true });



module.exports = mongoose.model('User', userSchema);

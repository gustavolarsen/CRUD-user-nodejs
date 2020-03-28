'use strict';

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
});

UserSchema.pre('save', async function (next) {
    let user = this;

    //A senha sera criptografada apenas se ela for modificada/recem criada
    if (!user.isModified('password'))
        return next();

    user.password = await bcrypt.hash(user.password, 10);
    return next();
});

module.exports = mongoose.model('User', UserSchema);
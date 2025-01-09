import mongoose from 'mongoose';

const EmailModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,

    },

    eventname: {
        type: String,
        required: true,

    },



});

const EmailModel = mongoose.model('EmailModel', EmailModelSchema);

export default EmailModel;

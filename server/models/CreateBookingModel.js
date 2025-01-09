import mongoose from "mongoose";

const CreateBookingModelSchema = new mongoose.Schema({
    eventname: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    count: {
        type: String,
        required: true
    },

    note: {
        type: String,
        required: true
    },


}, {
    timestamps: true
})


const CreateBookingModel = mongoose.model('CreateBookingModel', CreateBookingModelSchema)

export default CreateBookingModel


import mongoose from "mongoose";



const CreatePostModelSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },

    cover: {
        type: String,
        required: true
    },


    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User'
    },


}, {
    timestamps: true
})


const CreatePostModel = mongoose.model('CreatePostModel', CreatePostModelSchema)

export default CreatePostModel


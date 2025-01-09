
import CreatePostModel from "../models/CreatePostModel.js";
import mongoose from 'mongoose';


export const getPostId = async (req, res) => {
    try {
        const { id } = req.params


        const postDocId = await CreatePostModel.findById(id).populate('author', ['username'])

        if (!postDocId) {
            return res.status(404).json({ message: 'Post not found' });
        } else {
            res.json(postDocId);
        }




    } catch (error) {
        console.log(error)

    }




}; 

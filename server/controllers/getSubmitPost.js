
import CreatePostModel from "../models/CreatePostModel.js";

export const getSubmitPost = async (req, res) => {
    try {
        res.json(await CreatePostModel.find()
            .populate('author', ['username'])
            .sort({ createdAt: -1 })
            .limit(20)

        );

    } catch (error) {
        console.error("Error while creating post:", error);

    }


}; 

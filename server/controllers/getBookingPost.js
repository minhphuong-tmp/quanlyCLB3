
import CreateBookingModel from "../models/CreateBookingModel.js";

export const getBookingPost = async (req, res) => {
    try {
        res.json(await CreateBookingModel.find()
            .sort({ createdAt: -1 })
        );

    } catch (error) {
        console.error("Error while creating post:", error);

    }


}; 

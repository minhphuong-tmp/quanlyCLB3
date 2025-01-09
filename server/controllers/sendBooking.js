
import CreateBookingModel from "../models/CreateBookingModel.js";


export const sendBooking = async (req, res) => {
    try {

        const { eventname, location, time, date, count, note } = req.body;

        // Tạo document mới trong database
        const bookingPost = await CreateBookingModel.create({
            eventname,
            location,
            time,
            date,
            count,
            note,
        });

        // Phản hồi thành công
        res.json(bookingPost);

    } catch (error) {
        console.error("Error while creating post:", error);

        // Xử lý lỗi và phản hồi
        res.status(500).json({
            message: "Error creating post",
            error: error.message,
        });
    }
};

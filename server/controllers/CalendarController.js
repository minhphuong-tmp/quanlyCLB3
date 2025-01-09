import Calendar from "../models/CalendarModel.js";  // Đảm bảo đúng đường dẫn import model
import moment from "moment";

// Tạo sự kiện mới
export const createEvent = (async (request, response) => {
    console.log("body", request.body)

    try {
        // Tạo đối tượng mới từ body request
        const event = new Calendar(request.body);


        // Lưu sự kiện vào cơ sở dữ liệu
        await event.save();

        // Trả về phản hồi thành công
        response.status(201).json({
            message: "Event created successfully",
            data: event
        });
    } catch (error) {
        // Nếu có lỗi, trả về thông báo lỗi
        response.status(500).json({
            message: "Error creating event",
            error: error.message
        });
    }


});

// Lấy danh sách sự kiện theo khoảng thời gian
export const getEvent = (async (req, res) => {

    const events = await Calendar.find({
        start: { $gte: moment(req.query.start).toDate() },  // Kiểm tra các sự kiện bắt đầu từ thời gian start
        end: { $lte: moment(req.query.end).toDate() },   // Kiểm tra các sự kiện kết thúc trước thời gian end
    });

    res.send(events)


});

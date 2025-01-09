import Post from "../models/user.model.js";
import multer from "multer";
import fs from "fs";
import CreatePostModel from "../models/CreatePostModel.js";

export const sendSubmitPost = async (req, res) => {
    // console.log("file", req.body)
    try {
        console.log("file", req.body)
        const { originalname, path } = req.file;

        // Xử lý định dạng file
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = `${path}.${ext}`;

        // Đổi tên file
        fs.renameSync(path, newPath);

        // Nhận dữ liệu từ body
        const { title, summary, content, author } = req.body;

        // Tạo document mới trong database
        const postDoc = await CreatePostModel.create({
            title,
            summary,
            content,
            cover: newPath,
            author: author, // Nếu bạn có thông tin user trong `req`
        });

        // Phản hồi thành công
        res.json(postDoc);

    } catch (error) {
        console.error("Error while creating post:", error);

        // Xử lý lỗi và phản hồi
        res.status(500).json({
            message: "Error creating post",
            error: error.message,
        });
    }
};

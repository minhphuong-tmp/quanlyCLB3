import Post from "../models/user.model.js";
import multer from "multer";
import fs from "fs";
import CreatePostModel from "../models/CreatePostModel.js";

export const putSubmitPost = async (req, res) => {


    try {
        console.log("file", req.body)
        const { title, summary, content, id, } = req.body;

        const postDoc = await CreatePostModel.findById(id)


        if (req.file) {
            const { originalname, path } = req.file;


            // Xử lý định dạng file
            const parts = originalname.split('.');
            const ext = parts[parts.length - 1];
            const newPath = `${path}.${ext}`;

            // Đổi tên file
            fs.renameSync(path, newPath);

            await postDoc.update({
                cover: newPath

            })

        }

        await postDoc.update({
            title,
            summary,
            content,
        })
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

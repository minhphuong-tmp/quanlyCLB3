import express from "express";
import {
  commentPost,
  createPost,
  deletePost,
  getPost,
  updatePost,

} from "../controllers/post.controller.js";

import { searchUser } from "../controllers/searchUser.js";
import { getUserName } from "../controllers/getUserName.js";
import { sendSubmitPost } from '../controllers/sendSubmitPost.js'; // Đảm bảo đường dẫn chính xác
import multer from "multer";
import { createEvent, getEvent } from "../controllers/CalendarController.js";

import { getSubmitPost } from "../controllers/getSubmitPost.js";
import { getPostId } from "../controllers/getPostId.js";
import { putSubmitPost } from "../controllers/putSubmitPost.js";
import { sendBooking } from "../controllers/sendBooking.js";

import { getBookingPost } from "../controllers/getBookingPost.js";

import { sendEmail } from "../controllers/sendEmail.js";
import { getCountEmail } from "../controllers/getCountEmail.js";

const router = express.Router();

router.get("/post/:item", getPost);

router.post("/post/create", createPost);

router.patch("/post/update/:id", updatePost);

router.delete("/post/delete/:id", deletePost);

router.patch("/post/comment/:id", commentPost);

router.post("/search-user", searchUser)

router.get("/getUserName/:userId", getUserName)


//calendar
router.post("/create-event", createEvent)

router.get("/get-event", getEvent)


//Post 
const uploadMiddleware = multer({ dest: 'uploads/' });
router.post("/sendSubmitPost", uploadMiddleware.single('file'), sendSubmitPost)


router.get("/getSubmitPost", getSubmitPost)


router.get("/getpostId/:id", getPostId)

router.put("/putSubmitPost", uploadMiddleware.single('file'), putSubmitPost)
//Booking


router.post("/sendBooking", sendBooking)

router.get("/getBookingPost", getBookingPost)


router.post("/sendEmail", sendEmail)

router.get("/getCountEmail", getCountEmail)



export default router;

import nodemailer from 'nodemailer';
import EmailModel from '../models/EmailModel.js'


export const sendEmail = async (req, res) => {
    try {
        const { name, email, eventname, time, date, note } = req.body;
        console.log("body", req.body)
        console.log("eventname:", eventname)

        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: "tongminhphuong17022003@gmail.com",
                pass: "yscb vkqy jknq uvxq",
            },
        });
        const info = await transporter.sendMail({
            from: '"CLB Tin Học KMA" <tongminhphuong17022003@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Đăng ký tham gia hội thảo thành công ", // Subject line

            html: `
            <h3> Xin chào ${name} !</h3>
            <p>Bạn nhận được email này vì đã đặt lịch tham gia hội thảo của CLB Tin Học KMA thành công</p>
            <p>Thông tin hội thảo: </p>
            <div> <b> Tên sự kiện : ${eventname}  <b> </div>

            <div> <b> Thời gian: ${time}<b> </div>

            <div> <b> Ngày : ${date}  <b> </div>

            <div> <b> Chú thích: ${note}<b> </div>

            <p> Nếu thông tin trên là đúng hãy nhấn vào đường link bên dưới để xác nhận và kết thúc </p>
              <div>
             <a href="http://localhost:3000/home/booking" target="_blank" rel="noopener noreferrer">Click here</a>

              </div>
              <div> Xin chân thành cảm ơn ${name} đã đăng ký tham gia hội thảo của CLB TIN HỌC KMA. 
             
              </div>

            `, // html body
        }).then(async () => {
            // Gửi email thành công, tiếp tục lưu vào cơ sở dữ liệu

            const emailsave = new EmailModel({ eventname, name, email });
            console.log("Save result:", emailsave);
            await emailsave.save();
            const eventDocument = await EmailModel.find({ eventname: String(eventname) });
            console.log("eventDocument", eventDocument);
            const count = eventDocument.length;
            console.log(`Số lượng phần tử trong eventDocument: ${count}`);
            res.json({
                success: true,
                message: "Email sent successfully",
                count: count
            });

        })

        // Trả về phản hồi thành công 



    } catch (error) {
        console.log(error)
    }


};


import EmailModel from "../models/EmailModel.js";

export const getCountEmail = async (req, res) => {
    try {
        const { eventname } = req.body; // Lấy eventname từ body của request
        console.log('eventname', eventname)

        if (eventname) {
            console.log("chayj vaof day")


            const eventDocument = await EmailModel.find({ eventname: String(eventname) });
            console.log("eventDocument", eventDocument);
        }

        console.log("chay ra ngoai");

        res.json({ count });
        console.log(`Số lượng phần tử với eventname '${eventname}':`, count);



    } catch (error) {
        console.error("Error while counting emails:", error);
        res.status(500).json({ error: "An error occurred while counting emails." });
    }


}; 

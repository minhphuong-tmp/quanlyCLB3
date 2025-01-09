import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CalendarSchema = new Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },

});
// export collection name 'users' storing login infomation 
const Calendar = mongoose.model('Calendar', CalendarSchema);
export default Calendar;

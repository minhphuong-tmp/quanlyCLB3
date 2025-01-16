import React, { useState, useRef, useEffect } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import AddEventModal from "./AddEventModal";
import axios from "axios";
import moment from "moment";


export default function AddEventParent() {
    // State để quản lý trạng thái của modal và danh sách sự kiện
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);
    const [userid2, setUserid2] = useState(null);

    useEffect(() => {
        const storedUserId = sessionStorage.getItem("userId2");
        setUserid2(storedUserId); // Cập nhật state với giá trị userId2
    }, []);

    // Thêm sự kiện vào calendar khi được thêm
    const onEventAdded = (event) => {

        let calendarApi = calendarRef.current.getApi();

        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title,

        });



    };

    // Gửi sự kiện mới đến server
    async function handleEventAdd(data) {
        console.log("data", data)
        const eventData = {
            title: data.event.title,
            start: moment(data.event._instance.range.start).toISOString(),  // Convert start to ISO format
            end: moment(data.event._instance.range.end).toISOString()       // Convert end to ISO format
        };

        try {

            await axios.post("http://localhost:5000/create-event", eventData);


        } catch (error) {
            console.error("Error adding event:", error);
        }
    }

    // Xử lý khi thay đổi phạm vi thời gian trên FullCalendar
    async function handleDatesSet(data) {
        try {
            const response = await axios.get("http://localhost:5000/get-event?start=" + moment(data.start).toString() + "&end=" + moment(data.end).toString());
            setEvents(response.data);

        } catch (error) {
            console.error("Error fetching events:", error);
        }

    }

    return (
        <section>
            {/* Nút mở modal */}

            {(userid2) === "671636fd26dc9f54ebce8992" && (
                <button
                    style={{
                        marginLeft: '10px',
                        backgroundColor: 'rgb(236, 139, 122)', // Màu nền xanh
                        color: '#fff', // Màu chữ trắng
                        border: 'none', // Loại bỏ viền
                        borderRadius: '5px', // Bo góc
                        padding: '10px 20px', // Khoảng cách bên trong nút
                        fontSize: '16px', // Kích thước chữ
                        cursor: 'pointer', // Hiệu ứng con trỏ khi hover
                        boxShadow: 'rgb(236, 139, 122)', // Đổ bóng cho nút
                        transition: 'background-color 0.3s ease', // Hiệu ứng chuyển màu nền khi hover
                        marginTop: '10px', // Khoảng cách phía trên
                        width: '180px', // Đặt chiều rộng của nút
                        textAlign: 'center', // Canh giữa chữ trong nút
                        fontWeight: 'bold' // Đặt chữ đậm
                    }}
                    onClick={() => setModalOpen(true)}>Thêm lịch hẹn

                </button>
            )
            }


            {/* FullCalendar */}
            <div style={{ position: "relative", zIndex: 0, padding: "10px" }}>
                <FullCalendar

                    ref={calendarRef}
                    plugins={[dayGridPlugin]}
                    events={events} // Sự kiện được load từ server
                    initialView="dayGridMonth"
                    eventAdd={(event) => handleEventAdd(event)} // Khi sự kiện được thêm
                    datesSet={(date) => handleDatesSet(date)} // Khi thay đổi phạm vi thời gian
                // style={{ padding: '1000px' }}

                />
            </div>


            {/* Modal để thêm sự k  iện */}
            <AddEventModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onEventAdded={(event) => {
                    onEventAdded(event);
                    setModalOpen(false); // Đóng modal khi thêm sự kiện
                }}
            />
        </section >
    );
}

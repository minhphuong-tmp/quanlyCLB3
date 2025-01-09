import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Booking.css'; // Import file CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import BookingComponent from "./BookingComponent";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


import './BookingPost.css'
export default function Booking() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const history = useHistory();
    const [eventname, setEventName] = useState('');
    const [location, setLocation] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [count, setCount] = useState('');
    const [note, setNote] = useState('');
    const [userid2, setUserid2] = useState(null);


    useEffect(() => {
        const storedUserId = sessionStorage.getItem("userId2");
        setUserid2(storedUserId); // Cập nhật state với giá trị userId2
    }, []);


    async function createEvent({ eventname, location, time, date, count, note }) {
        const data = {
            eventname: eventname,
            location: location,
            time: time,
            date: date,
            count: count,
            note: note,
        };
        console.log("data:", data);


        const response = await fetch('http://localhost:5000/sendBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Xác định kiểu dữ liệu
            },
            body: JSON.stringify(data),

        });

        if (response.ok) {
            history.push('/home/booking');
        } else {
            console.log("loi")
        }


    }


    const [getBookingPost, setgetBookingPost] = useState([]);
    useEffect(async () => {
        await fetch('http://localhost:5000/getBookingPost').then(response => {

            response.json().then(getBookingPost => {

                setgetBookingPost(getBookingPost)
            })
        })
    }, [])
    console.log("Booking Post:", getBookingPost)


    return (
        <div>
            <div className="header-booking">
                <h1 >Hội thảo CLB Tin Học KMA</h1>
            </div>

            {(userid2) === "671636fd26dc9f54ebce8992" && (
                <Button
                    color="danger"
                    onClick={toggle}
                >
                    Tạo buổi hội thảo
                </Button>
            )}



            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}> Hẹn trước</ModalHeader>
                <ModalBody>
                    <div className="form-container">

                        <div className="form-group">
                            <label>Tên sự kiện</label>
                            <input
                                className="form-control"
                                type="eventname"
                                placeholder="Tên sự kiện"
                                value={eventname}
                                onChange={(ev) => {
                                    setEventName(ev.target.value);

                                }}

                            >

                            </input>


                        </div>
                        <div className="form-group">
                            <label>Địa điểm</label>
                            <input className="form-control"

                                type="location"
                                placeholder="Địa điểm tổ chức"
                                value={location}
                                onChange={ev => setLocation(ev.target.value)}
                            >


                            </input>

                        </div>
                        <div className="form-group">
                            <label>Thời gian</label>
                            <input
                                className="form-control"
                                type="time"
                                placeholder="Thời gian tổ chức"
                                value={time}
                                onChange={(ev) => {
                                    setTime(ev.target.value);

                                }}>


                            </input>

                        </div>
                        <div className="form-group">
                            <label>Ngày</label>
                            <input

                                className="form-control"
                                type="date"
                                placeholder="Ngày tổ chức"
                                value={date}
                                onChange={(ev) => {
                                    setDate(ev.target.value);

                                }}
                            ></input>

                        </div>



                        <div className="form-group">
                            <label>Số lượng</label>
                            <input
                                className="form-control"
                                type="count"
                                placeholder="Số lượng người"
                                value={count}
                                onChange={(ev) => {
                                    setCount(ev.target.value);

                                }}
                            ></input>

                        </div>
                        <div className="form-group">
                            <label>Chú ý</label>
                            <input
                                className="form-control"
                                type="note"
                                placeholder="Ghi chú"
                                value={note}
                                onChange={(ev) => {
                                    setNote(ev.target.value);

                                }}
                            ></input>

                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={(ev) => {
                            createEvent({ eventname, location, time, date, count, note });
                            toggle(); // Đóng modal sau khi xác nhận
                        }}>
                        Xác nhận
                    </Button>{' '}
                    <Button
                        color="secondary"
                        onClick={toggle}>
                        Huỷ
                    </Button>
                </ModalFooter>
            </Modal>


            <div className="bookingpost-parentcontainer-parent">
                {getBookingPost.length > 0 && getBookingPost.map((post, index) => (
                    <BookingComponent {...post} eventNumber={index + 1} key={index} />
                ))}
            </div>
        </div>
    );
}

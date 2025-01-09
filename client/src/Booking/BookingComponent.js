

import { hasCustomDayCellContent } from "@fullcalendar/core/internal.js";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import './BookingPost.css'
import Email from "./Email";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function BookingComponent(props) {
    // const bookingpostatDate = (dateString) => {
    //     const date = new Date(dateString);

    //     // Lấy các thành phần của ngày tháng
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    //     const day = String(date.getDate()).padStart(2, '0');
    //     const hours = String(date.getHours()).padStart(2, '0');
    //     const minutes = String(date.getMinutes()).padStart(2, '0');
    //     const seconds = String(date.getSeconds()).padStart(2, '0');

    //     // Trả về ngày tháng theo định dạng yyyy-MM-dd HH:mm:ss
    //     return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    // };
    // const bookingpostattedDate = props.createdAt ? bookingpostatDate(props.createdAt) : '';
    const [modal, setModal] = useState(false);  // state để quản lý Modal
    const toggle = () => setModal(!modal);  // Hàm để toggle trạng thái Modal
    const [getCountEmail, setgetCountEmail] = useState('');

    if (!props) return null;


    return (
        <div className="bookingpost-parentcontainer">

            <div className="bookingpost-container">

                <h3>Sự kiện số  {props.eventNumber} </h3>
                {/* <div className="bookingpost-group">
                    <label>Tên sự kiện</label>
                    <input
                        className="bookingpost-control"
                        type="eventname"
                        placeholder="Tên sự kiện"
                        value={props.eventname}

                    >

                    </input>

                </div>
                <div className="bookingpost-group">
                    <label>Địa điểm</label>
                    <input className="bookingpost-control"

                        type="location"
                        placeholder="Địa điểm tổ chức"
                        value={props.location}

                    >


                    </input>

                </div>
                <div className="bookingpost-group">
                    <label>Thời gian</label>
                    <input
                        className="bookingpost-control"
                        type="time"
                        placeholder="Thời gian tổ chức"
                        value={props.time}
                    >


                    </input>

                </div>
                <div className="bookingpost-group">
                    <label>Ngày</label>
                    <input

                        className="bookingpost-control"
                        type="date"
                        placeholder="Ngày tổ chức"
                        value={props.date}

                    ></input>

                </div>
                <div className="bookingpost-group">
                    <label>Số lượng</label>
                    <input
                        className="bookingpost-control"
                        type="count"
                        placeholder="Số lượng người"
                        value={props.count}

                    ></input>

                </div>
                <div className="bookingpost-group">
                    <label>Chú ý</label>
                    <input
                        className="bookingpost-control"
                        type="note"
                        placeholder="Ghi chú"
                        value={props.note}

                    ></input>

                </div> */}
                <table className="table">
                    <tr>
                        <td style={{ width: "100px" }}>
                            Tên sự kiện

                        </td>
                        <td>
                            {props.eventname}

                        </td>

                    </tr>


                    <tr>
                        <td style={{ width: "100px" }}>
                            Địa điểm

                        </td>
                        <td>
                            {props.location}

                        </td>

                    </tr>

                    <tr>
                        <td style={{ width: "100px" }}>
                            Thời gian

                        </td>
                        <td>
                            {props.time}

                        </td>

                    </tr>
                    <tr>
                        <td style={{ width: "100px" }}>
                            Ngày

                        </td>
                        <td>
                            {props.date}

                        </td>

                    </tr>
                    <tr>
                        <td style={{ width: "100px" }}>
                            Số lượng

                        </td>
                        <td>
                            {props.count}

                        </td>

                    </tr>
                    <tr>
                        <td style={{ width: "100px" }}>
                            Chú ý

                        </td>
                        <td>
                            {props.note}

                        </td>

                    </tr>


                </table>


                <Email
                    toggle={toggle} // Truyền hàm toggle vào Email component
                    modal={modal} // Truyền trạng thái modal vào Email component
                    eventDetails={{ props }} // Truyền các chi tiết sự kiện vào Email component
                />
                <button onClick={toggle}>Tham gia</button>

            </div>


        </div>

    );
}

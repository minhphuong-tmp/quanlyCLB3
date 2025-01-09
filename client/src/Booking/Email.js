import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import './BookingPost.css'

import { useHistory } from 'react-router-dom';

export default function Email({ toggle, modal, eventDetails }) {
    const { time, date, count, note } = eventDetails; // Lấy các chi tiết sự kiện
    console.log("eventdetails", eventDetails.count)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();

    const sendEmail = async (name, email, eventname, count) => {
        const data = {
            eventname: eventname,
            name: name,
            email: email,
        };


        const response = await fetch('http://localhost:5000/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Xác định kiểu dữ liệu
            },
            body: JSON.stringify(data),

        });

        if (response.ok) {
            const responseData = await response.json();
            console.log("Count from server:", responseData.count);
            alert(`Bạn là người thứ ${responseData.count} / ${count} đăng ký tham gia sự kiện này!`);
            toggle();
            // history.push('/home/booking');
        } else {
            console.log("loi")
        }




    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{eventDetails.eventname}</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Họ và tên</label>
                    <input
                        className="form-control"
                        type="name"
                        placeholder="Họ và tên"
                        value={name}
                        onChange={(ev) => {
                            setName(ev.target.value);

                        }}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(ev) => {
                            setEmail(ev.target.value);

                        }}

                    />
                </div>

                <div className="form-group">
                    <label>Tên sự kiện</label>
                    <input
                        className="form-control"
                        type="eventname"
                        placeholder="Tên sự kiện"
                        value={eventDetails.props.eventname}
                        readOnly

                    />
                </div>

                <div className="form-group">
                    <label>Thời gian</label>
                    <input
                        className="form-control"
                        type="name"
                        placeholder="Họ và tên"
                        value={eventDetails.props.time || ''}
                        readOnly
                    // value={e}

                    />
                </div>
                <div className="form-group">
                    <label>Ngày</label>
                    <input
                        className="form-control"
                        type="name"
                        placeholder="Họ và tên"
                        value={eventDetails.props.date || ''}
                        readOnly
                    // value={eventname}

                    />
                </div>
                <div className="form-group">
                    <label>Số lượng</label>
                    <input
                        className="form-control"
                        type="name"
                        placeholder="Họ và tên"
                        value={eventDetails.props.count || ''}
                        readOnly
                    // value={eventname}

                    />
                </div>
                <div className="form-group">
                    <label>Chú thích</label>
                    <input
                        className="form-control"
                        type="name"
                        placeholder="Họ và tên"
                        value={eventDetails.props.note || ''}
                        readOnly
                    // value={eventname}

                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={() => sendEmail(name, email, eventDetails.props.eventname, eventDetails.props.count)}>
                    Xác nhận
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Hủy
                </Button>
            </ModalFooter>
        </Modal>
    );
}

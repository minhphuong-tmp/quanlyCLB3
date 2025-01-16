import React, { useState } from "react";
import Modal from 'react-modal';
import Datetime from 'react-datetime';


export default function ({ isOpen, onClose, onEventAdded }) {
    const [title, setTitle] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());



    const onSubmit = (event) => {
        event.preventDefault();

        onEventAdded({
            title,
            start,
            end,

        })

        onClose();


    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}>

            <form onSubmit={onSubmit}>

                <input placeholder="Nhập tiêu đề cho cuộc hẹn" value={title} onChange={e => setTitle(e.target.value)}></input>
                <div>
                    <label> Start Date</label>


                    <Datetime value={start} onChange={date => setStart(date)}></Datetime>

                </div>

                <div>
                    <label> End Date</label>


                    <Datetime value={end} onChange={date => setEnd(date)}></Datetime>

                </div>

                <button
                    style={{
                        marginLeft: '5px',
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
                    }}>
                    Add event
                </button>
                {/* {userid2 === "671636fd26dc9f54ebce8992" ? (
                  
                ) : null} */}

            </form>


        </Modal >

    )

}


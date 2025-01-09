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

                {/* 
                {userid2 === "671636fd26dc9f54ebce8992" ? (
                    <button>
                        Add event
                    </button> 
                ) : null} */}

            </form>


        </Modal >

    )

}


/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import AddEventModal from "./AddEventModal";

import AddEventParent from "./AddEventParent";


export default class Calendar extends Component {


    render() {
        return (

            <section>
                <AddEventParent></AddEventParent>


            </section>
        );
    }
}

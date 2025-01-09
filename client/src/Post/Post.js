import React, { useState, useRef, useEffect } from "react";


import "../Post/Post.css"
import "./PostComponent"
import PostComponent from "./PostComponent";

import Header from "./Header";
import { Route, Routes } from "react-router-dom/cjs/react-router-dom.min";


export default function Post() {
    const [getSubmitPost, setgetSubmitPost] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getSubmitPost').then(response => {

            response.json().then(getSubmitPost => {
                setgetSubmitPost(getSubmitPost)
            })
        })
    }, [])


    return (
        <main>

            {<Header />}

            {getSubmitPost.length > 0 && getSubmitPost.map(post => (

                < PostComponent {...post} />

            ))}


        </main>


    );
}



import React from "react";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router-dom";
import { use } from "react";
import { id } from "date-fns/locale";
import './Post.css';

export default function EditPost(props) {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [cover, setCover] = useState('');

    const history = useHistory();

    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    };

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files[0]) {
            data.set('file', files[0]);

        }

        data.set("id", props._id)

        data.set('author', sessionStorage.getItem("userId2"));

        console.log("data", data.files)

        const response = await fetch('http://localhost:5000/putSubmitPost', {
            method: 'PUT',
            body: data,

        });

        if (response.ok) {
            history.push('/post/' + props._id);
        } else {
            console.log("loi")
        }

    }

    useEffect(() => {
        fetch('http://localhost:5000/getpostid/' + props._id)

            .then(response => {
                response.json().then(postInfo => {
                    console.log("postInfo", postInfo)
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);



                });
            });


    }, [])

    return (
        <form onSubmit={updatePost}>

            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
                className="react-quill-input" />


            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}
                className="react-quill-input" />


            <input type="file"
                className="react-quill-input"

                onChange={(ev) => {
                    console.log("Event:", ev); // Log sự kiện
                    console.log("Selected files:", ev.target.files); // Log danh sách file
                    setFiles(ev.target.files)
                    console.log("enven files[0]", files)

                }}

            />




            <ReactQuill
                value={content}
                onChange={newValue => setContent(newValue)}
                modules={modules}
            >

            </ReactQuill>

            <button className="react-quill-button" style={{ marginTop: '5px' }}>Sửa bài viết</button>
        </form>
    )
} 
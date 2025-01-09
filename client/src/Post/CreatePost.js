import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './Post.css';

import "react-quill/dist/quill.snow.css";
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

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

    const history = useHistory();




    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        data.set('author', sessionStorage.getItem("userId2"));

        console.log("data", data)
        ev.preventDefault();


        const response = await fetch('http://localhost:5000/sendSubmitPost', {
            method: 'POST',
            body: data,

        });

        if (response.ok) {
            history.push('/home/post');
        } else {
            console.log("loi")
        }

    }

    // if (redirect) {
    //     return <Navigate to={'/home/post'}></Navigate> 
    // }

    return (
        <form onSubmit={createNewPost}>

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

                onChange={ev => setFiles(ev.target.files)}
                className="react-quill-input" />


            <ReactQuill
                value={content}
                onChange={newValue => setContent(newValue)}
                modules={modules}
            >

            </ReactQuill>

            <button className="react-quill-button" style={{ marginTop: '5px' }}>Tạo bài viết</button>
        </form>
    )


}

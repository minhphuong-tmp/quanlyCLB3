

// import { formatISO9075 } from "date-fns";
// import { formatISO9075 } from "date-fns";

import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function PostComponent(props) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);

        // Lấy các thành phần của ngày tháng
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        // Trả về ngày tháng theo định dạng yyyy-MM-dd HH:mm:ss
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };
    const formattedDate = props.createdAt ? formatDate(props.createdAt) : '';

    return (
        <div className="post">
            <Link to={`/post/${props._id}`}>


                <div className="image">
                    <img src={'http://localhost:5000/' + props.cover} alt=""></img>

                </div>
            </Link>

            <div className="texts">

                <Link to={`/post/${props._id}`}>
                    <h2 className="title">   {props.title}     </h2>
                </Link>


                <p className="info">
                    <a className="author">{props.author.username}</a>
                    <time>{formattedDate}</time>

                </p>

                {/* //  <div>{props.content}</div> */}


                <p className="summary">
                    <p>{props.summary}</p>


                </p>


            </div>
        </div>
    )

}


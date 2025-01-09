import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useEffect, useState, setState } from "react";

import favicon from "../logo/favicon.png"

export default function Header() {
    const [username, setUsername] = useState(null);

    // setUsername(sessionStorage.getItem("userId2"))
    useEffect(() => {
        const storedUsername = sessionStorage.getItem("userId2");
        setUsername(storedUsername);
        console.log("state username:", username)
    }, []); // De

    // setState(username)

    return (
        <header>
            <Link to="/home/post" >

                <img
                    src={favicon}
                />


            </Link>

            <nav>

                <h2 className="headertitle">KMA - Tin học - Bài viết </h2>



                {username && (
                    <Link to="/home/create">Tạo bài viết </Link>
                )}







            </nav>

        </header>


    )
}
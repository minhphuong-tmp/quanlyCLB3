import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./input-search.css";
import toast from "react-hot-toast";
import axios from "axios";
import { use } from "react";

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchUser: [],
            search: "",
            user: [],
            username: "",
        };
    }

    componentDidMount() {
        this.handleSearchUser(); // Gọi ngay khi component mount

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.search !== this.state.search) {
            this.handleSearchUser(); // Gọi khi search thay đổi
            console.log("username:", this.state.username)
        }

    }

    handleSearchUser = async () => {
        const URL = "http://localhost:5000/search-user";
        try {
            const response = await axios.post(URL, {
                search: this.state.search,
            });
            this.setState({
                searchUser: response.data.data,
                username: response.data.data
            });

        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    };

    handleInputChange = (e) => {
        this.setState({ search: e.target.value });
    };

    renderUserCard = (user) => {
        const { onClose, onUserSelect } = this.props; // Nhận hàm onClose từ props nếu có
        return (
            <Link

                key={user._id}
                to={"/home/chat/" + user._id}
                onClick={(e) => {
                    e.stopPropagation(); // Ngăn sự kiện lan ra ngoài
                    if (onUserSelect) {
                        onUserSelect(user._id); // Truyền username được chọn về MessagePage
                    }


                    if (onClose) onClose(); // Gọi hàm onClose nếu được truyền
                }}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "8px",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    border: "1px solid transparent",
                    borderBottom: "1px solid #E2E8F0",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "border-color 0.2s ease",

                }}
            >
                <div>
                    <div
                        style={{
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            lineHeight: "1.5",
                            color: "red"
                        }}
                    >
                        {user.username}
                    </div>
                </div>
            </Link>
        );
    };

    render() {
        const { searchUser, search } = this.state;
        const { onClose } = this.props;

        return (
            <div>
                <input
                    type="text"
                    placeholder="Tìm kiếm tên người dùng"
                    className="input-custom"
                    onChange={this.handleInputChange}
                    value={search}
                />

                {searchUser.length === 0 && (
                    <div className="search-show">Không tìm thấy người dùng</div>
                )}

                {searchUser.length !== 0 &&

                    searchUser.map((user) => this.renderUserCard(user))}

                <div className="close-search" onClick={onClose}>
                    <button>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchUser;

/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./NavBar.css";
import "boxicons";
import { AiOutlineHome } from "react-icons/ai";
import { BsClipboardData } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "../router";
import { Redirect } from "react-router";
import { BiNotepad } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";

import { BiCalendar } from "react-icons/bi";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
      openNav: false,
      chooseHome: true,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      chooseBooking: false,

      choosePost: false,

      userId2: sessionStorage.getItem("userId2") || "",
    };

  }

  componentDidMount() {
    this.setState({
      role: sessionStorage.getItem("role"),
    });
  }

  open = () => {
    this.setState({
      openNav: !this.state.openNav,
    });
  };

  chooseHome = () => {
    this.setState({
      chooseHome: true,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,

    });
  };

  chooseNoti = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: true,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,

    });
  };

  chooseChat = () => {
    const { userId2 } = this.state;
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: true,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,


    });
    this.props.history.push(`/home/chat/${userId2}`);
  };

  chooseList = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: true,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,

    });
  };

  chooseChart = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: true,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,

    });
  };

  chooseProfile = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: true,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,

    });
  };

  chooseLogout = () => {

    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("msv");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("lop");
    sessionStorage.removeItem("item");
  };

  chooseInfoTeacher = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: true,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: false,

    });
  };

  chooseCalendar = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: true,
      choosePost: false,
      chooseBooking: false,

    });
  };

  choosePost = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: true,
      chooseBooking: false,

    });
  };




  chooseBooking = () => {
    this.setState({
      chooseHome: false,
      chooseNoti: false,
      chooseChat: false,
      chooseList: false,
      chooseChart: false,
      chooseInfoTeacher: false,
      chooseProfile: false,
      chooseCalendar: false,
      choosePost: false,
      chooseBooking: true,

    });
  };






  render() {
    if (localStorage.getItem("accessToken") == null) {
      return <Redirect to='/login' />;
    }
    var {
      role,
      openNav,
      chooseHome,
      chooseNoti,
      chooseChat,
      chooseList,
      chooseChart,
      chooseInfoTeacher,
      chooseProfile,
      chooseCalendar,
      choosePost,
      chooseBooking,
    } = this.state;
    return (
      <Router>
        <section className='body'>
          <div className={openNav ? "sidebar open" : "sidebar"}>
            <div className='logo-details'>
              {/* cai 3 gach */}
              <div className='logo_name'>MENU</div>
              <div id='btn' onClick={this.open}>
                <box-icon name='menu' color='#ffffff'></box-icon>
              </div>
            </div>
            <ul className='nav-list'>
              <li
                className={chooseHome ? "home" : ""}
                onClick={this.chooseHome}>
                <Link to='/home'>
                  <div className='icon'>
                    <AiOutlineHome />
                  </div>
                  <span className='links_name'>Trang chủ</span>
                </Link>
                <span className='tooltip'>Trang chủ</span>
              </li>

              <li
                id='bangdiem'
                className={
                  (chooseList ? "home" : "") +
                  (role === "student" ? "student" : "")
                }
                onClick={this.chooseList}>
                <Link to='/home/list-students'>
                  {/* danh sach sinh vien */}
                  <div className='icon'>
                    <BsClipboardData />
                  </div>
                  <span className='links_name'>DS Sinh viên</span>
                </Link>
                <span className='tooltip'>DS Sinh viên</span>
              </li>


              <li
                className={chooseCalendar ? "home" : ""}
                onClick={this.chooseCalendar}>
                <Link to='/home/calendar'>
                  <div className='icon'>
                    <BiCalendar /> {/* Biểu tượng lịch */}
                  </div>
                  <span className='links_name'>Lịch Hẹn</span> {/* Tên mục */}
                </Link>
                <span className='tooltip'>Lịch Hẹn</span> {/* Tooltip */}
              </li>






              <li
                className={chooseNoti ? "home" : ""}
                onClick={this.chooseNoti}>
                <Link to='/home/notification'>
                  {/* thong bao */}
                  <div className='icon'>
                    <IoMdNotificationsOutline />
                  </div>
                  <span className='links_name'>Thông Báo</span>
                </Link>
                <span className='tooltip'>Thông Báo</span>
              </li>




              <li
                className={choosePost ? "home" : ""}
                onClick={this.chooseBooking}>
                <Link to='/home/booking'>
                  <div className='icon'>
                    <FaRegClock /> {/* Biểu tượng lịch */}
                  </div>
                  <span className='links_name'>Đặt Lịch </span> {/* Tên mục */}
                </Link>
                <span className='tooltip'>Đặt Lịch</span> {/* Tooltip */}
              </li>




              <li
                className='chart'
                className={
                  (chooseChart ? "home" : "") +
                  (role === "student" ? "student" : "")
                }
                onClick={this.chooseChart}>
                <Link to='/home/chart'>
                  <div className='icon'>
                    <span className='fa fa-chart-bar'></span>
                  </div>
                  <span className='links_name'>Biểu đồ điểm</span>
                </Link>
                <span className='tooltip'>Biểu đồ điểm</span>
              </li>






              <li
                className='profile'
                className={
                  (chooseProfile ? "home" : "") +
                  (role === "student" ? "" : "student")
                }
                onClick={this.chooseProfile}>
                <Link to='/home/profile'>
                  <div className='icon'>
                    <span className='fa fa-id-card'></span>{" "}
                  </div>
                  <span className='links_name'>Hồ sơ</span>

                  <span className='tooltip'>Hồ sơ</span>
                </Link>
              </li>









              <li
                className={choosePost ? "home" : ""}
                onClick={this.choosePost}>
                <Link to='/home/post'>
                  <div className='icon'>
                    <BiNotepad /> {/* Biểu tượng lịch */}
                  </div>
                  <span className='links_name'>Bài viết</span> {/* Tên mục */}
                </Link>
                <span className='tooltip'>Bài Viết</span> {/* Tooltip */}
              </li>





              <li
                className={chooseChat ? "home" : ""}
                onClick={this.chooseChat}>
                <Link to='/home/chat'>
                  <div className='icon'>
                    <span className='fa fa-comment-dots'></span>
                  </div>
                  <span className='links_name'>Chat</span>

                  <span className='tooltip'>Chat</span>
                </Link>
              </li>










              <li className='logout' onClick={this.chooseLogout}>
                <a href='/'>
                  {/* Log out */}
                  <div className='icon'>
                    <BiLogOut />
                  </div>
                  <span className='links_name'>Đăng Xuất</span>
                </a>
                <span className='tooltip'>Đăng Xuất</span>
              </li>



            </ul>
          </div>
          <div className={openNav ? "nav_open" : "nav_close"}>
            <div>{this.show(routes)}</div>
          </div>
        </section>
      </Router>
    );
  }

  show = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default NavBar;

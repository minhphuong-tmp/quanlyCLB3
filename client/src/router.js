import React, { Children } from "react";
import Home from "./HomePage/Component/Home";
import Notification from "./HomePage/Component/Notification";
import Chat from "./Chat/Chat";
import ListStudent from "./ListStudent/ListStudent";
import Chart from "./Chart/Chart";
import AddForm from "./ListStudent/Components/AddForm";
import InfoStudent from "./ListStudent/Components/InfoStudent";
import ImportData from "./ListStudent/Components/ImportData";
import Profile from "./Profile/Profile";
import ChangePassword from "./Profile/ChangePassword";
import UserSearchCard from "./ListStudent/Components/UserSearchCard";
import SearchUser from "./ListStudent/Components/SearchUser";
import MessagePage from "./ListStudent/Components/MessagePage";

import Calendar from "../src/Calendar/Calendar";

import Post from "./Post/Post";
import CreatePost from "./Post/CreatePost";
import PostPage from "./Post/PostPage";
import PostComponent from "./Post/PostComponent";
import EditPost from "./Post/EditPost";
import Booking from "./Booking/Booking";

const routes = [
  {
    path: "/home/notification",
    exact: true,
    main: () => <Notification />,
  },

  // {
  //   path: "/home/chat",
  //   exact: true,
  //   main: () => <Chat />,
  //   children:[
  //     {
  //       path:':username'
  //       element: <Chat />
  //     }
  //   ]
  // },


  {
    path: "/home/list-students",
    exact: true,
    main: () => <ListStudent />,
  },
  {
    path: "/home/chart",
    exact: true,
    main: () => <Chart />,
  },
  {
    path: "/home/list-students/add",
    exact: true,
    main: () => <AddForm />,
  },
  {
    path: "/home/list-students/update/:id",
    exact: true,
    main: ({ match }) => <InfoStudent match={match} />,
  },




  {
    path: "/home/chat",
    exact: true,
    main: () => <MessagePage />,
  },





  // {
  //   path: "/home/chat",
  //   exact: true,
  //   main: ({ match }) => <Chat />,
  // },

  {
    path: "/home/chat/:username",
    exact: false, // Cho phép xử lý dynamic URL
    main: ({ match }) => {
      const userId = match.params.userId; // Lấy userId từ URL
      return userId ? <MessagePage username={userId} /> : <MessagePage />;
    },
  },


  {
    path: "/home/list-students/import-data",
    exact: true,
    main: () => <ImportData />,
  },
  {
    path: "/home/profile",
    exact: true,
    main: ({ match }) => <Profile match={match} />,
  },
  {
    path: "/home",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/home/change-password",
    exact: true,
    main: () => <ChangePassword />,
  },


  {
    path: "/home/calendar",
    exact: true,
    main: () => <Calendar />,
  },


  {
    path: "/home/post",
    exact: true,
    main: () => <Post />,
  },


  {
    path: "/home/create",
    exact: true,
    main: () => <CreatePost />,
  },



  // {
  //   path: "/post/:_id",
  //   exact: true,
  //   main: () => <PostPage />,
  // },

  {
    path: "/post/:_id",  // Định nghĩa dynamic URL với param là _id
    exact: true,  // Đảm bảo route khớp chính xác
    main: ({ match }) => {
      const _id = match.params._id;  // Lấy _id từ URL
      console.log('_id:', _id);  // Kiểm tra xem _id có chính xác không

      // Truyền _id vào PostPage
      return _id ? <PostPage _id={_id} /> : <PostPage />;
    },
  },


  {
    path: "/edit/:_id",  // Định nghĩa dynamic URL với param là _id
    exact: true,  // Đảm bảo route khớp chính xác
    main: ({ match }) => {
      const _id = match.params._id;  // Lấy _id từ URL
      console.log('_id:', _id);  // Kiểm tra xem _id có chính xác không

      // Truyền _id vào PostPage
      return _id ? <EditPost _id={_id} /> : <EditPost />;
    },
  },





  {
    path: "/home/booking",
    exact: true,
    main: () => <Booking />,
  },




];

export default routes;

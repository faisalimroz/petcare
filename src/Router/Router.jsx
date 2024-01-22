import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Home/Blog/Blog";

import Signup from "../pages/Home/Signup/Signup";
import Contactus from '../pages/Home/Contactus/Contactus'
import Login from "../pages/Home/Login/Login";
import Blogdetails from "../pages/Home/Blog/Blogdetail/Blogdetails/Blogdetails";
import Services from "../pages/Home/Services/Services";
import Veterinary from "../pages/Home/Servicelist/Veterinary/Veterinary";
import Grooming from "../pages/Home/Servicelist/Grooming/Grooming";
import Daycare from "../pages/Home/Servicelist/Daycare/Daycare";
import Boarding from "../pages/Home/Servicelist/Boarding/Boarding";
import Payment from "../pages/Home/Servicelist/Payment/Payment";
import Profile from "../Layout/Profile";
import UserProfile from "../Profile/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import Allusers from "../Profile/UserProfile/Allusers/Allusers";
import Postblog from "../Profile/PostBlog/PostBlog";
import OrderPage from "../Profile/OrderPage/OrderPage";
import AllOrder from "../Profile/AllOrder/AllOrder";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path: '/blog/:bid',
        element: <Blogdetails></Blogdetails>
      },
      
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/contactus',
        element: <Contactus></Contactus>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/veterinary',
        element: <Veterinary></Veterinary>
      },
      {
        path: '/grooming',
        element: <Grooming></Grooming>
      },
      {
        path: '/boarding',
        element: <Boarding></Boarding>
      },
      {
        path: '/daycare',
        element: <Daycare></Daycare>
      }
    ]
  },
  {
    path: '/profile',
    element:<PrivateRoute><Profile></Profile></PrivateRoute>,
    children: [
      {
        path: 'userprofile', // Remove the leading slash
        element:<UserProfile></UserProfile>
      },
      
      {
        path: 'allusers',
        element: <Allusers></Allusers>
      },
      {
        path: 'postblog',
        element: <Postblog></Postblog>
      },
      {
        path: 'allorder',
        element: <AllOrder></AllOrder>
      },
      {
        path: 'orderhistory',
        element: <OrderPage></OrderPage>
      }
      
    ]
  }
]);
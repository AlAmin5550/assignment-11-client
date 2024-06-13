import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Error from "../Components/Error";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import JobDetails from "../Pages/JobDetails";
import AppliedJobs from "../Pages/AppliedJobs";
import AllJobs from "../Pages/AllJobs";
import AddJobs from "../Pages/AddJobs";
import MyJobs from "../Pages/MyJobs";
import UpdateJobs from "../Pages/UpdateJobs";
import Blogs from "../Pages/Blogs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/signUp",
            element:<SignUp></SignUp>
        },
        {
          path: "/jobs/:id",
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>
        },
        {
          path:"/appliedJobs",
          element:<PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
        },
        {
          path: "/allJobs",
          element:<AllJobs></AllJobs>
        },
        {
          path:"/addJobs",
          element:<AddJobs></AddJobs>
        },
        {
          path:"/myJobs",
          element:<PrivateRoute><MyJobs></MyJobs></PrivateRoute>
        },
        {
          path:"/updateJob/:id",
          element:<PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>
        },
        {
          path:"/blogs",
          element:<Blogs></Blogs>
        }
        
      ]
    },
    
  ]);

export default router;
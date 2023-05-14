import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./../components/LoginSignup/Login";
import Admindashbord from "../pages/Admin/admindashbord";
import Studenddashbord from "../pages/Student/studenddashbord";
import Institutedashbord from "../pages/Teacher/institutedashbord";
import Signup from "../components/LoginSignup/Signup";


export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="Dashboard"><h1 className="text-center">Home Page</h1></Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="admindashbord/*" Component={Admindashbord}/>
          <Route path="institutedashbord/*" Component={Institutedashbord} />
          <Route path="studenddashbord/*" Component={Studenddashbord} />
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

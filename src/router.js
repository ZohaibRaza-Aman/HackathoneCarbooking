import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./redux/Screen/Home";
import Cart from "./redux/Screen/cart";
import Login from "./redux/Screen/login";
import SignUp from "./redux/Screen/signup";
import "../src/App.css"
import Admin from "./redux/Screen/admin";
import User from "./redux/Screen/user";
import ProtectedRoute from './config/firebase/ProtectedRoute';
import Cardetails from "./redux/Screen/cardetails";
import Booknow from './redux/Screen/booknow';



export default function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="cardetails" element={<Cardetails/>}></Route>
        <Route path="booknow" element={<Booknow />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="transporter/*" element={<ProtectedRoute Component={Admin} type="admin"/>}></Route>
        <Route path="user/*" element={<ProtectedRoute Component={User}  type="user"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

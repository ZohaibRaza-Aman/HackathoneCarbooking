import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useDispatch, useSelector } from "react-redux";
import { add } from "../reducer/loginslice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../config/firebase/firbasemethods";

export default function Login() {
  const [model, setModel] = useState({});
  const navigate = useNavigate();
  const [loaoder, setLoader] = useState(false);

  // const onChange = (e) => {
  //   setModel({ ...model, userType: e.target.value });
  // };

  const handleLoginUser = () => {
    setLoader(true)
    console.log('model',model )
    loginUser(model)
      .then((res) => {
        console.log('res', res)
        setLoader(false)
    
        if (res.userType == 1) {
          navigate("/transporter");
        } else if (res.userType == 2) {
          navigate("/user");
        }else{
          alert("no user found")
        }
        // navigate("/dashboard")
      })
      .catch((err) => {
        setLoader(false)
        alert(err)

        console.log(err);
      });
  };

  return (
  <div>
     <section className="main-sec">
     <div className="login-box">
      <form action="">
        <h2>login</h2>
        <div className="input-box">
          <span className="icon">
          <EmailIcon className="text-warning"/>
          </span>
          <input
           value={model.userName}
           onChange={(e) => setModel({ ...model, userName: e.target.value })}
           type="email" required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon">
          <LockIcon className="text-warning"/>
          </span>
          <input
          value={model.password}
          onChange={(e) => setModel({ ...model, password: e.target.value })}
          type="password" required />
          <label>Password</label>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button disabled={loaoder} onClick={handleLoginUser} type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account?<a className="p-4" href="/signup">Rigister</a></p>
        </div>
      </form>
    </div>
   </section>
  </div>
  );
}

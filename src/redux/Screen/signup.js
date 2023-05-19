import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./signup.css";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import DropDL from "../../Components/dropDL";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../config/firebase/firbasemethods";
import { Box } from "@mui/material";
import Navbar from "./navbar";

export default function SignUp() {
  const [model, setModel] = useState({});
  const navigate = useNavigate();

  let RegisterUser = (e) => {
    e.preventDefault();
    if (
      !model.email ||
      !model.userName ||
      !model.password ||
      !model.conPassword ||
      !model.userType ||
      !model.mobile
    ) {
      alert("Fill all fields first");
    } else if (model.password !== model.conPassword) {
      alert("enter same password ");
    } else {
      signUpUser(model)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          alert(err);
          console.log("error in signup", err);
        });
    }
  };
  const handleChange = (e) => {
    setModel({ ...model, userType: e.target.value });
  };

  return (
    <>
    <Navbar/>
    <div className="pt-3">
      <div className="pt-5">
      <section className="main-sec">
        <div className="login-box">
          <form>
            <h2>Sign Up</h2>
            <div className="input-box">
              <span className="icon">
                <AccountCircleIcon className="text-warning" />
              </span>
              <input
                onChange={(e) =>
                  setModel({ ...model, userName: e.target.value })
                }
                type="text"
                required
              />
              <label>Your Name</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <EmailIcon className="text-warning" />
              </span>
              <input
                onChange={(e) => setModel({ ...model, email: e.target.value })}
                type="email"
                required
              />
              <label>Your Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <PhoneIcon className="text-warning" />
              </span>
              <input
                onChange={(e) => setModel({ ...model, mobile: e.target.value })}
                type="number"
                required
              />
              <label>Mobile Number</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <LockIcon className="text-warning" />
              </span>
              <input
                onChange={(e) =>
                  setModel({ ...model, password: e.target.value })
                }
                type="password"
                required
              />
              <label>Password</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <PasswordIcon className="text-warning" />
              </span>
              <input
                onChange={(e) =>
                  setModel({ ...model, conPassword: e.target.value })
                }
                type="password"
                required
              />
              <label>Confirm Your Password</label>
            </div>
              <DropDL
                value={model.userType}
                label={"Select Type"}
                handleOonChange={(e) => handleChange(e)}
                datasource={[
                  {
                    id: 1,
                    name: "Transporter",
                  },
                  {
                    id: 2,
                    name: "User",
                  },
                ]}
              />
            <div className="remember-forgot">
              <label></label>
              <a href="#"></a>
            </div>
            <div className="register-link">
              <p>
                I have already an account?
                <a className="p-2" href="/login">
                  Login
                </a>
              </p>
            </div>
            <button onClick={RegisterUser}>Sign Up</button>
          </form>
        </div>
      </section>
    </div>
    </div>
    </>
  );
}

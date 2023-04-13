import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Campus Sphere");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Invalid Credentials.");
    }
  };

  return (
    <div className="login-wrapper">
      <img src={logo} className="logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Login to Campus Sphere</h1>
        <p className="sub-heading">Connect and collaborate with likeminded individuals</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Your institute Email Id."
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={login} className="login-btn">
          Log In
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to Campus Sphere?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Connect now with your institute Email
          </span>
        </p>
      </div>
    </div>
  );
}
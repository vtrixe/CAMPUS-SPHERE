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

    <div className="top-level-div">

    <div className="divheader">
    <div className="divheader3-inner">
      <div className="h4fs-1">
        <div className="campus-sphere1111111111111101">
          <div className="logo">CAMPUS SPHERE</div>
        </div>
      </div>
      <div className="divnav3-inner-links">
      <a href="/" class="home-link">Home</a>
<a href="/about" class="documents-link">About Us</a>
<a href="/contact" class="projects-link">Contact Us</a>
<a href="/register" class="news-link">Sign Up</a>


     
      <div className="abutton">
      <a href="/login" class="login">Login</a>
      </div>
    </div>
  </div>
    
    <div className="login-wrapper">
      <div className="loginc"> Campus Sphere</div>

      <div className="login-wrapper-inner">
        <h1 className="loginc">Login to Campus Sphere</h1>
        <p className="loginc">Connect and collaborate with likeminded individuals</p>

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
    </div>
    </div>
  );
}
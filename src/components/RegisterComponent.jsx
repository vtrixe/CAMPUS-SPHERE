import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Your account has been created and linked to your institute.");
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink:
          "https://img.freepik.com/free-icon/user_318-159711.jpg",
      });
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Your account was not Created.");
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
    </div>
  </div>
    
    <div className="login-wrapper">
    <div className="logo"> Campus Sphere</div>


      <div className="login-wrapper-inner">
        <h1 className="heading">Connect with your peers</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, name: event.target.value })
            }
            type="text"
            className="common-input"
            placeholder="Your Name"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Institute Email Address"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={register} className="login-btn">
          Agree & Join our Network
        </button>
      </div>
      <hr class="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          Already a Member?{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
            Log In.
          </span>
        </p>
      </div>
    </div>
    /</div>
    </div>
  );
}

import React from "react";
import "../Sass/contact.scss";
export default function About() {
    return (
        <div>
      <div className="divheader">
            <div className="divheader3-inner">
                <div className="h4fs-1">
                    <div className="campus-sphere1111111111111101">
                        <p className="campus-">CAMPUS SPHERE</p>
                    </div>
                </div>
                <div className="divnav3-inner-links">
                    <a href="/" class="home-link">Home</a>
                    <a href="/about" class="documents-link">About Us</a>
                    <a href="/contact" class="projects-link">Contact Us</a>
                    <a href="/register" class="news-link">Sign Up</a>
  
  
                </div>
                <div className="abutton">
                    <a href="/login" class="login">Login</a>
                </div>
            </div>
            </div>

            <h2 class="yy">Please input your information to get in touch with us</h2>
            <form action="#" method="post" class="ddiv">
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required />
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required />
  </div>
  <div>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" />
  </div>
  <div>
    <label for="message">Feedback:</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  <button type="submit">SUBMIT</button>
</form>

            </div>
            )}

import "../Sass/Landing.scss"
import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import logo from "../assets/logo.png";
import googlesvg from "../assets/googlesvg.svg";
import introimg from "../assets/pexels-hasan-albari-1229861.jpg";
import horse from "../assets/White-Diamond.svg";
import image from "../assets/image09.jpg";
import network from "../assets/network.jpg"






function Landing() {
  return (
    <div className="campus-sphere11111111111111015">
    <div className="divkt-wrapper">
      <div className="divcard">
        <div className="divcard-body">
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
              <div className="abutton">
              <a href="/login" class="login">Login</a>
              </div>
            </div>
          </div>
          <div className="divintro3">
            <div className="divauto-container">
              <div className="pseudo" />
              <div className="divintro3-inner">
                <div className="divintro3-inner-content">
                  <div className="h1h2d-e95d4e8a">
                    <b className="h1welcome-to-campus-container">
                      <span className="h1welcome-to-campus-container1">
                        <p className="campus-">{`Welcome to`}</p>
                        <p className="campus-">Campus Sphere -</p>
                        <p className="campus-">Connect with</p>
                        <p className="campus-">{`Peers &`}</p>
                        <p className="campus-">{`Alumni!`}</p>
                      </span>
                    </b>
                  </div>
                  <div className="lih2d-7733dc12">
                    <div className="tag-your-friends-container">
                      <span className="h1welcome-to-campus-container1">

                        <p>              </p>
                       
                        <p className="campus-">
                          Stay connected through social media!
                        </p>
                        <p className="campus-">
                          Make sure to stay updated with
                        </p>
                        <p className="campus-">the latest events and news on your campus.</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="divintro3-inner-image">
                  <div className="pseudo1" />
                  <img
                    className="pexels-photo-1542252jpeg-icon"
                    alt=""
                    src={network}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="divfeat3">
            <div className="divfeat3-inner">
              <div className="divfeat3-inner-content">
                <div className="divfeat3-inner-text">
                  <b className="feature-rich">Feature rich</b>
                  <div className="h2h2d-6b2e218a">
                    <b className="campus-sphere-social-container">
                      <p className="campus-">Campus</p>
                      <p className="campus-">Sphere: Social</p>
                      <p className="campus-">Networking for</p>
                      <p className="campus-">Students</p>
                    </b>
                  </div>
                  <div className="ph2d-2a757cf7">
                    <div className="campus-spheres-social-container">
                      <p className="campus-">
                        Campus Sphere's social media website allows users to
                        interact
                      </p>
                      <p className="campus-">
                        with their peers, professors, and company
                        representatives while
                      </p>
                      <p className="campus-">
                        also receiving news and updates concerning events on
                        campus.
                      </p>
                      <p className="campus-">
                        Through the website, users can also access various
                        resources
                      </p>
                      <p className="campus-">
                        such as job postings and scholarship opportunities to
                        help them
                      </p>
                      <p className="campus-">succeed in college.</p>
                    </div>
                  </div>
                </div>
                <div className="abutton1">
                <a href="/register" class="login">Sign Up</a>
                </div>
              </div>
              <div className="divfeat3-inner-list">
                <b className="quick-easy">{`Quick & easy`}</b>
                <div className="ulh2d-39c27d9d">
                  <div className="lih2d-b7ba81fc">
                    <div className="user-profiles">User Profiles</div>
                    <div className="ph2d-5476cc2b">
                      <div className="create-personalized-digital-container">
                        <span className="h1welcome-to-campus-container1">
                          <p className="campus-">
                            Create personalized digital profiles to
                          </p>
                          <p className="campus-">
                            broadcast yourself to your contacts and
                          </p>
                          <p className="campus-">make new acquaintances.</p>
                        </span>
                      </div>
                    </div>
                    <img
                      className="pseudo-icon"
                      alt=""
                      src={horse}
                    />
                  </div>
                  <div className="lih2d-10399b76">
                    <div className="post-sharing">Post Sharing</div>
                    <div className="ph2d-acc007f8">
                      <div className="share-posts-with-container">
                        <span className="h1welcome-to-campus-container1">
                          <p className="campus-">
                            Share posts with your friends, family, and
                          </p>
                          <p className="campus-">
                            followers to build relationships, spread
                          </p>
                          <p className="campus-">
                            ideas, and develop conversations.
                          </p>
                        </span>
                      </div>
                    </div>
                    <img
                      className="pseudo-icon"
                      alt=""
                      src={horse}
                    />
                  </div>
                  <div className="lih2d-2fba2aff">
                    <div className="platforms-diversity">
                       Events
                    </div>
                    <div className="ph2d-5476cc2b">
                      <div className="variety-of-platforms-container">
                        <span className="h1welcome-to-campus-container1">
                          <p className="campus-">
                            Advertise and Share about
                          </p>
                          <p className="campus-">
                            Events and News on campus and
                          </p>
                          <p className="campus-">
                            capture  audiences.
                          </p>
                        </span>
                      </div>
                    </div>
                    <img
                      className="pseudo-icon"
                      alt=""
                      src={horse}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divjoin3">
            <div className="divjoin3-inner">
              <img
                className="divjoin3-inner-bg-icon"
                alt=""
                src={image}
              />
              <div className="divjoin3-inner-row">
                <div className="h2h2d-af327867">
                  <b className="join-the-waitlist-container">
                    <span className="h1welcome-to-campus-container1">
                      <p className="campus-">Join the</p>
                      <p className="campus-">waitlist to start</p>
                      <p className="campus-">using our</p>
                      <p className="campus-">product</p>
                    </span>
                  </b>
                </div>
                <div className="divjoin3-inner-content">
                  <div className="ph2d-9e7fe4ac">
                    <div className="are-you-looking-container">
                      <span className="h1welcome-to-campus-container1">
                        <p className="campus-">
                          Are you looking to get involved on your college
                          campus?
                        </p>
                        <p className="campus-">
                          Join the Campus Sphere social media waitlist and be
                          the
                        </p>
                        <p className="campus-">
                          first to know when we launch! #CampusSphere
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="abutton2">
                    <div className="login">Join the waitlist</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
     
  
        </div>
      </div>
    </div>

  </div>
  )
}

export default Landing
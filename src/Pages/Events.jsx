import React, { useMemo, useState } from "react";
import Home from "../Pages/Home";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import "../Sass/events.scss";
import crypto from "../assets/crypto.jpg";
import meta from "../assets/meta.jpg";
import algo from "../assets/algo.jpg";
import ctf from "../assets/ctf.jpg";

  
export default function HomeLayout() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);

  return (
    <div>
      <Topbar currentUser={currentUser} />
  <div class="flex-container">
  <div class="event-container">
    <div class="event-image">
    <img src={crypto}/>
      <div class="event-info">
        <h2 class="event-title">CryptoCodeFest</h2>
        <p class="event-description">A week-long coding festival focused on cryptocurrency and blockchain technologies. Participants will work on building applications that leverage smart contracts and decentralized exchanges (DEXs)</p>
        <p class="event-date">23-30 MAY 2023 </p>
      </div>
    </div>
  </div>
  <div class="event-container">
    <div class="event-image">
    <img src={meta}/>
      <div class="event-info">
        <h2 class="event-title">Hack the Metaverse</h2>
        <p class="event-description"> A 24-hour hackathon for developers interested in creating applications for the metaverse. Participants will work on projects that explore the intersection of virtual worlds, blockchain, and decentralized systems</p>
        <p class="event-date">2-3 JUNE 2023 </p>
      </div>
    </div>
  </div>
</div>
<div class="flex-container">
  <div class="event-container">
    <div class="event-image">
    <img src={algo}/>
      <div class="event-info">
        <h2 class="event-title">Algorithmic Olympiad</h2>
        <p class="event-description"> A global coding competition that tests participants' skills in algorithms and data structures. Participants will work on a series of algorithmic challenges, ranging from easy to advanced</p>
        <p class="event-date">12-14 JUNE 2023</p>
      </div>
    </div>
  </div>
  <div class="event-container">
    <div class="event-image">
    <img src={ctf}/>
      <div class="event-info">
        <h2 class="event-title">Cyber CTF</h2>
        <p class="event-description">it is a catch the flag type competition.teams will compete in security challenges against each other</p>
        <p class="event-date">25-26 JUNE 2023</p>
      </div>
    </div>
  </div>
</div>




    </div>
  );
}

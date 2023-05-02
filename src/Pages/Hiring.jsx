import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import data from "../assets/data-scientist.svg";
import market from "../assets/marketing-manager.svg";
import product from "../assets/product-manager.svg";
import project from "../assets/project-manager.svg";
import sales from "../assets/sales-representative.svg";
import soft from "../assets/software-engineer.svg";
import human from "../assets/human.png";
import cyber from "../assets/cyber.png";
import quant from "../assets/quant.png";
import "../Sass/hiring.scss"

function Hiring() {
  const [currentUser, setCurrentUser] = useState({});

  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  
  return (<div>
    <div><Topbar currentUser={currentUser} /></div>
    <div class="job-listing">
  <div class="job">
    <div class="job-img"><img src={data}/></div>
    <div class="job-details">
      <h2 class="job-title">Data Scientist</h2>
      <p>Company-<b>DATABRICKS</b></p>
      <p class="job-description"> <b>requirements-</b>  Proficiency in Python and R . Experience with machine learning, data visualization, and big data technologies </p>
      <a href="https://www.databricks.com/" class="link">APPLY NOW</a>

    </div>
    
  </div>
  <div class="job">
    <div class="job-img"><img src={market}/></div>
    <div class="job-details">
      <h2 class="job-title">Marketing Manager</h2>
      <p>Company-<b>JP MORGAN AND CHASE</b></p>
      <p class="job-description"><b>requirements- </b>Bachelor's or Master's degree in marketing, business, or a related field.strong communication and leadership</p>
      <a href="https://www.jpmorgan.com/global" class="link">APPLY NOW</a>
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={product}/></div>
    <div class="job-details">
      <h2 class="job-title">Product Manager</h2>
      <p>Company-<b>ACCENTURE</b></p>
      <p class="job-description"><b>requirements-</b> Strong analytical, strategic, and communication skills.Master's degree in business ormarketing</p>
      <a href="https://www.accenture.com/in-en" class="link">APPLY NOW</a>        
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={project}/></div>
    <div class="job-details">
      <h2 class="job-title">Project Manager</h2>
      <p>Company-<b>AMAZON</b></p>
      <p class="job-description"><b>requirements-</b>Experience in project management methodologies, budgeting, and risk management.Master's degree in project management </p>
      <a href="https://www.amazon.jobs/en/" class="link">APPLY NOW</a>   
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={sales}/></div>
    <div class="job-details">
      <h2 class="job-title">Sales Representative</h2>
      <p>Company-<b>SALESFORCE</b></p>
      <p class="job-description"><b>requirements-</b>Strong communication, interpersonal, and negotiation skills. Experience in sales, account management, and customer service </p>
      <a href="https://www.salesforce.com/in/" class="link">APPLY NOW</a> 
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={soft}/></div>
    <div class="job-details">
      <h2 class="job-title">Software Engineer</h2>
      <p>Company-<b>GOOGLE</b></p>
      <p class="job-description"><b>requirements-</b>Proficiency in  Java, Python, or C++.software development methodologies, version control systems and software testing</p>
      <a href="https://careersonair.withgoogle.com/" class="link">APPLY NOW</a> 
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={human}/></div>
    <div class="job-details">
      <h2 class="job-title">HR PROFESSIONAL</h2>
      <p>Company-<b>TCS</b></p>
      <p class="job-description"><b>requirements-</b>Experience in recruitment, employee relations, and performance management</p>
      <a href="https://www.tcs.com/careers" class="link">APPLY NOW</a> 
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={cyber}/></div>
    <div class="job-details">
      <h2 class="job-title">CyberSecurity Professional</h2>
      <p>Company-<b>MCAFEE</b></p>
      <p class="job-description"><b>requirements-</b>Master's degree in cybersecurity.Strong knowledge of security protocols and networking</p>
      <a href="https://careers.mcafee.com/global/en" class="link">APPLY NOW</a> 
    </div>
  </div>
  <div class="job">
    <div class="job-img"><img src={quant}/></div>
    <div class="job-details">
      <h2 class="job-title">Quantitaive Analyst</h2>
      <p>Company-<b>TOWER RESEARCH</b></p>
      <p class="job-description"><b>requirements-</b> Master's degree in mathematics.Proficiency in python or R</p>
      <a href="https://www.tower-research.com/open-positions" class="link">APPLY NOW</a> 
    </div>
  </div>
</div>



    </div>
  )
}

export default Hiring
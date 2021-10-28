import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/homes.png";
import "../styles/Home.css";
import About from "./About";
import Resource from "./Resource";
import Update from "./liveUpdates";



function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${main})`}}>
      
      <div className="headerContainer">
        <h1> Finance Club </h1>
        <h2> NIT Rourkela</h2>
        <p>The Finance club of NITR is one of the largest professional clubs on campus, hosting a full schedule of events to help everyone from those with no background in finance to those coming from finance looking to switch focus within the industry.</p>
        <Link to="/about">
          <button> KNOW MORE </button>
        </Link>
        
      </div>
      <About/>
      <Resource/>
      <Update/>    
      </div>
    
      
  );
}

export default Home;

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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantiunjjjjjijijiji</p>
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

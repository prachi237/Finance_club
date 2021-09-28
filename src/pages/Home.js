import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/homes.png";
import "../styles/Home.css";
import About from "./About";



function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${main})`}}>
      
      <div className="headerContainer">
        <h1> Finance Club </h1>
        <p> NIT ROURKELA</p>
        <Link to="/about">
          <button> KNOW MORE </button>
        </Link>
        
      </div>
      <About/>
      

      </div>
    
      
  );
}

export default Home;

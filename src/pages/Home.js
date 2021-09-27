import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/hOME.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${main})` }}>
      <div className="leftside">
      <div className="headerContainer">
        <h1> Finance Club </h1>
        <p> NIT ROURKELA</p>
        <Link to="/about">
          <button> KNOW MORE </button>
        </Link>
      </div>
      </div>
      <div className="rightside">
       
      </div>
    </div>
  );
}

export default Home;

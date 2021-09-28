import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="preF">
    <div className="infoF">
     
    <div className="column1">
      <h2>ABOUT</h2>
      The Finance club of NITR is one of the largest professional clubs on campus, hosting a full schedule of events to help everyone from those with no background in finance to those coming from finance looking to switch focus within the industry.  </div>
    <div className="column2">
      <h2>QUICK LINKS</h2>
      <ul>Home</ul>
      <ul>About us</ul>
      <ul>Our Events</ul>
      <ul>Our Team</ul>
      <ul>Contact us</ul>
      </div>
    <div className="column3">
      <h2>NITR</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
            </div>

     
      </div>  
    <div className="footer"> 
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2021 Finance Club NITR</p>
    </div>
    </div>
  );
}

export default Footer;

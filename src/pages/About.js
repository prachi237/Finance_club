import React from "react";
import "../styles/About.css";
import ReactPlayer from "react-player"

function About() {
  return (
    <div className="about">
      
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <div className="leftSide">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
          nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
          error repudiandae fuga? Ipsa laudantium molestias eos sapiente
          officiis modi at sunt excepturi expedita sint? Sed quibusdam
          recusandae alias error harum maxime adipisci amet laborum.
        </p>
        <p>
       <h2>Why did we started?</h2> 
We start because we see something that needs a beginning. This need pushes us to fulfill it.
We started the Finance club as we felt the need to spread awareness on finance.
Let's take a look at the bigger picture.<br/>
We think we know considerably about finance. Let's break the myth here! Try to answer what decision would you take in the following situation
<br/>1) buying a car or renting it. 
<br/>2) buying a house or renting a space
<br/>3) How will you save money, and why are you saving it? 
<br/>4 ) How are you planning to achieve financial freedom? Is it by saving and being a penny-pincher or by investing?
<br/>5) What is a stock market? What is a mutual fund? What are cryptos? 
<br/>6 ) If fd is more stable and secured than the stock market, then do you know about YES bank?
These are the question that we generally fail to answer. No wonder financial literacy in India is well below 5%.
Therefore, we felt the need for a new start and to bring financial literacy out of the shadow.
 We together want to encourage people to have a straightforward idea of finance and help them learn the powerful notion of investing.
So that together, we can turn the myth of "making money and achieving financial freedom while you sleep" into reality.
        </p>
        </div>
        <div className="rightSide">
        
        </div>
      </div>
      <div className="videoAbout">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=pWU3DYvnP0s"
      />
    </div>
    
    </div>
  );
}

export default About;

import React from "react";
import "../styles/Resource.css";
import res from "../assets/resource.jpg";
function Resource(){
return(
   <div className="resource" style={{ backgroundImage: `url(${res})`}}>
     
     <div className="aboutBottom">
     <h1 className="title"> LEARNING RESOURCES</h1> 
     <div className="cards">
     <div className="Rcard1">
       <h1>
         Stock Markets
       </h1>

     </div>
     <div className="Rcard2">
       <h1>
         Start-ups
       </h1>

     </div>

     <div className="Rcard3">
       <h1>
         Crypto
       </h1>

     </div>
     </div>
        </div>  
   </div>
 );
}
export default Resource;

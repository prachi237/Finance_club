import React from "react";
import "../styles/Resource.css";
import res from "../assets/resource.jpg";
function Resource(){
return(
   <div className="resource" style={{ backgroundImage: `url(${res})`}}>
     
     <div className="aboutBottom">
     <h1 className="title"> LEARNING RESOURCES</h1> 
     <p className="brief">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>  
   </div>
 );
}
export default Resource;

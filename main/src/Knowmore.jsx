import React, { useState } from 'react';
import './Knowmore.css'

const info = [
  {
    id: 1,
    name: "Name 1",
    pict: "https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg",
    role: "",
    linkedin:"",
    instagram:"",
  },

  {
    id: 2,
    name: "lvnc /d",
    pict: "https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg",
    role: "",
    linkedin:"",
    instagram:"",
  },

  {
    id: 3,
    name: "dk vzkds",
    pict: "https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg",
    role: "",
    linkedin:"",
    instagram:"",
  },

]

// const flipCard = (props) => {
//   return (
//     <div class="flip-card" id={props.id} >
//                 <div class="flip-card-inner">
//                   <div class="flip-card-front">
//                     <img src={props.pict} alt="Avatar" />
//                   </div>
//                   <div class="flip-card-back">
//                     <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
//                     <div className="text" style={{position:'relative', color:'black'}}>
//                       <h1>{props.name }</h1> 
//                       <br />
//                       <h2>Role</h2>
//                       <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank">{props.linkedin} LinkeIn</a></p> 
//                       <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank">{props.instagram} Instagram</a></p> 
//                     </div>
//                   </div>
//                 </div>
//               </div>
//   )
// }
 

export default function Knowmore() {
    return (
          <div className="knowmore_section">
            <div className="heading_knowmore_section"><h1>Our Team</h1></div>
              <div className="knowcards_section">
              

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
                    <div className="text" style={{position:'relative', color:'black'}}>
                      <h1>Name </h1> 
                      <br />
                      <h2>Role</h2>
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> LinkeIn</a></p> 
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> Instagram</a></p> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
                    <div className="text" style={{position:'relative', color:'black'}}>
                    <h1>Name </h1> 
                      <br />
                      <h2>Role</h2>
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> LinkeIn</a></p> 
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> Instagram</a></p> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
                    <div className="text" style={{position:'relative', color:'black'}}>
                    <h1>Name </h1> 
                      <br />
                      <h2>Role</h2>
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> LinkeIn</a></p> 
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> Instagram</a></p> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
                    <div className="text" style={{position:'relative', color:'black'}}>
                    <h1>Name </h1> 
                      <br />
                      <h2>Role</h2>
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> LinkeIn</a></p> 
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> Instagram</a></p> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
                    <div className="text" style={{position:'relative', color:'black'}}>
                    <h1>Name </h1> 
                      <br />
                      <h2>Role</h2>
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> LinkeIn</a></p> 
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> Instagram</a></p> 
                    </div>
                  </div>
                </div>
              </div>

              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" />
                  </div>
                  <div class="flip-card-back">
                    <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
                    <div className="text" style={{position:'relative', color:'black'}}>
                    <h1>Name </h1> 
                      <br />
                      <h2>Role</h2>
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> LinkeIn</a></p> 
                      <p><img src="" alt="" /> <a href="http://" style={{color:'black'}} target="_blank"> Instagram</a></p> 
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
    )
}


// export default function Knowmore() {
//     return (
//           <div className="knowmore_section">
//             <div className="heading_knowmore_section"><h1>Our Team</h1></div>
//               <div className="knowcards_section">
//               <div class="flip-card">
//                 <div class="flip-card-inner">
//                   <div class="flip-card-front">
//                     <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1631379669/sample.jpg" alt="Avatar" /> 
//                   </div>
//                   <div class="flip-card-back">
//                     <img src="https://res.cloudinary.com/dnnaacqq0/image/upload/v1632810768/finclub_swz0tz.jpg" alt="" srcset="" style={{width:'100%', height:'100%', position:'absolute', display:"flex", justifyContent:"center", alignItems:"center"}}/>
//                     <div className="text" style={{position:'relative', color:'black'}}>
//                       {/* <h1>John Doe</h1> 
//                       <p>Architect  Engineer</p> 
//                       <p>We love that guy</p> */}
//                       {
//                         info.map(function flipCard (val){
//                           return(
//                             <flipCard
//                             id = {val.id}
//                             name = {val.name}
//                             pict = {val.pict}
//                             />
                            
//                           )
//                         })
//                       }
//                     </div>
//                   </div>
//                 </div>
//             </div>
//             </div>
//             </div>
// )
// }
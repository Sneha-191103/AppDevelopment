import React from "react";
import Lottie from 'react-lottie';
import animationData from '../lottie/front.json';
import '../css/home.css'
import { Link } from "react-router-dom";
import '../logobg.png'
export default function Home(){
   
    return(
        <div className="home">
            <div className="lottie">
      <img src="logobg.png"
        height={500}
        width={800}
      />
    </div>
    <div>
       <Link to="/login"><button className="hbutton">Login</button></Link> 
    </div>
        </div>
    )
}
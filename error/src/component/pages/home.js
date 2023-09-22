import React from "react";
import Lottie from 'react-lottie';
import animationData from '../lottie/front.json';
import '../css/home.css'
import { Link } from "react-router-dom";
export default function Home(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return(
        <div className="home">
            <div className="lottie">
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={700}
      />
    </div>
    <div>
       <Link to="/login"><button className="hbutton">Login</button></Link> 
    </div>
        </div>
    )
}
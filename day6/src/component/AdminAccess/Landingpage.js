import React from "react";
import { useState,useEffect } from "react";
import '../css/landing.css'
import {Link} from'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";
import NavBar from "../pages/navbar";
import Footer from "./footer";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function LandingPage(){
    const items=[
        <img src="https://i.pinimg.com/564x/54/a0/da/54a0dab3b33aae77885ea98e6416a221.jpg" className="item" width="900px" height="400px"></img>,
        <img src="https://i.pinimg.com/564x/6e/fa/2e/6efa2e0ba35c945c7634fbc5eda1f3a8.jpg" className="item" width="900px" height="400px"></img>,
        <img src="https://i.pinimg.com/564x/a4/89/26/a4892625cd16162bcbf0beb2cce5cdb9.jpg" className="item" width="900px" height="400px"></img>,
        <img src="https://i.pinimg.com/564x/42/a0/7e/42a07ea2ef5575eaaa33e25c0257c4a7.jpg" className="item" width="900px" height="400px"></img>,
];

 
return(        
        <div>
        <div><NavBar/></div>
        <div className="main">
        <div className="alice"> 
        <center>
        <AliceCarousel
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={3000}
            animationDuration={3000}
            animationType="slide"
            infinite
            touchTracking={false}
            disableDotsControls
            disableButtonsControls
            items={items}
        />
        </center>
        </div>
        <br></br>
        <br></br>
        <div className="about">
        Introducing Happy Tummy, your passport to a world of culinary convenience.
        Are you craving delicious food from your favorite restaurants? Craving your favorite dishes from the best local eateries? 
        but don't want to leave the comfort of your home?Look no further! 
        Happy Tummy is here to satisfy your taste buds with a seamless and convenient food delivery experience.With our seamless app, 
        you're just a few taps away from a feast delivered straight to your door. Choose from a diverse range of cuisines, 
        customize your orders to perfection, and track your delivery in real-time. We prioritize your safety, ensuring every meal arrives hot and fresh. 
        Plus, with exclusive promotions and reliable service, Happy Tummy promises an unparalleled dining experience.
         Download now and savor the ease of deliciousness, redefined. Your next extraordinary meal is just moments away.
        </div>
        <br></br>
        <center>
        <img src="logobg.png" width='800px' height='300px'></img>
       
        </center>
        <br></br>
        <hr></hr>
        <div className="contact">
            <div className="email">Mail Us
            <br></br>
            <br></br>happytummy@gmail.com</div>
            <div className="email">Contact Us
            <br></br>
            <br></br>+91 9876543210</div>
            <div className="email">Follow Us<br></br>
            <br></br><FaTwitter width={"45px"} height={"45px"} className="pic"/>
            <FaInstagram width={"45px"} height={"45px"} className="pic"/>
            <FaFacebook width={"45px"} height={"45px"} className="pic"/></div>
            
</div>
</div>  
<Footer/>
        </div>
       
        
    )

}
export default LandingPage;
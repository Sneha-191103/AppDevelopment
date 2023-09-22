import React, { useEffect, useState } from "react"; 
import '../css/login.css'
import Lottie from 'react-lottie';
import animationData from '../lottie/driver.json';
import { Link, useNavigate } from "react-router-dom";  
import { FaEnvelope, FaPhoneAlt, FaUnlock, FaUserTie } from 'react-icons/fa'
import Popup from "../popup/popup";
import Sidebar from "./Sidebar";

export default function AdminManagement()
{
    const [openSidebarToggle,setopenSidebarToggle]=React.useState(false)
    const OpenSidebar=()=>{
        setopenSidebarToggle(!openSidebarToggle)
    }
    
    
    return(
        <>
     <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={OpenSidebar}/>
        <div className="ff">
           
        </div>
        </>
    )
}
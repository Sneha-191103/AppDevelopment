import React, { useEffect, useState } from "react";
import '../css/nav.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userslice";
import { FaUserAlt } from "react-icons/fa";
export default function NavBar(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const SubmitLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
       
         window.localStorage.setItem('userdata',JSON.stringify("null"));

        navigate('/login');
        
    }

   
    return(
        <div className="navbar">
        <div className="prof">HOME
            </div>
        <div  className="prof">SETTINGS
            </div>
        <div className="prof">CONTACT
            </div>
       
             <div className="prof">
          <div className="im" ><FaUserAlt style={{fontSize:'25px'}}/> 

        </div>
          </div>
            
        </div>
    )
}
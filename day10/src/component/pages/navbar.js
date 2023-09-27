import React, { useEffect, useRef, useState } from "react";
import '../css/nav.css'
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userslice";
import { FaSignInAlt, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import Popup from "../popup/popup";
import { useUser } from "../Context/usercontext";
import '../happytummy.png'
import '../logobg.png'
export default function NavBar({isLoggedIn}){
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const {logout:userLogout}=useUser();
    const SubmitLogout=(e)=>{
        e.preventDefault();
        userLogout();
        dispatch(logout());
        navigate('/login');
        
    }
   

   
    return(
        <div className="navbar">
            <div className="log">
                <img src='logobg.png' width='150px' height='70px'></img>
               
                </div>
            <div className="log" activeclassName="actives">
       <Link to='/landing' className="linked" style={{color:'black'}}><div className="prof">HOME
            </div></Link> 
        <Link to='/hotel'className="linked" style={{color:'black'}}><div  className="prof">HOTELS
            </div></Link>
            <Link to='/cart'className="linked" style={{color:'black'}}><div className="prof">CART
            </div></Link>
       
             <div className="prof">
             {isLoggedIn ? (
            <div className="im" ><FaSignOutAlt style={{fontSize:'25px'}}/> <div onClick={SubmitLogout}>Login</div></div>
          ) : (
            <div className="im" ><FaSignInAlt style={{fontSize:'25px'}}/> <div onClick={SubmitLogout}>Logout</div></div>
          )}
        </div>

        </div>
          </div>
              
            
       
    )
}
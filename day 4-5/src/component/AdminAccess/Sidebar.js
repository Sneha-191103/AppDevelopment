import React, { useState } from 'react';
import '../css/sidebar.css'
import {
    FaTh,
    FaBars,
    FaShoppingBag,
    FaUserTie,
    FaUsers,
    FaUserShield,
    FaUtensils,
    FaRegHandshake,
    FaMoneyCheckAlt,
    FaChartLine,
    FaComments,
    FaUser
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import NavBar from '../pages/navbar';
import { useSelector } from 'react-redux';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dash",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/adminmanagement",
            name:"Admin Management",
            icon:<FaUserShield/>
        },
        {
            path:"/usermanagement",
            name:"User Management",
            icon:<FaUsers/>
        },
        {
            path:"/merchantmanagement",
            name:"MerchantManagement",
            icon:<FaUserTie/>
        },
        {
            path:"/deliverypartner",
            name:"Delivery Partners",
            icon:<FaShoppingBag/>
        },
        {
            path:"/cuisine",
            name:"Cuisine",
            icon:<FaUtensils/>
        },
        {
            path:"/transactions",
            name:"Transactions",
            icon:<FaMoneyCheckAlt/>
        },
        {
            path:"/deliverystatus",
            name:"Delivery Status",
            icon:<FaChartLine/>
        },
        {
            path:"/Commissions",
            name:"Commissions",
            icon:<FaRegHandshake/>
        },
        {
            path:"/Comments",
            name:"Comments",
            icon:<FaComments/>
        }
    ]
    const user=useSelector((state)=>state.user.user)
    return (
        <>
      
      
        <div className="container">
           <div style={{width: isOpen ? "360px" : "50px"}} className="sidebar">
               <div className="top_section">
            {/* <h1><FaUser/></h1> */}
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">{user.username}</h1>
                   <div style={{marginLeft: isOpen ? "200px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/> 
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
          
           <main>
           <NavBar/>
           <div className='child'>{children}   </div>
                
           </main>
        </div>
        </>
    );
};

export default Sidebar;
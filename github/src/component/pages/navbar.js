import React, { useEffect, useState } from "react";
import '../css/nav.css'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userslice";

export default function NavBar(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const SubmitLogout=(e)=>{
        e.preventDefault();
        dispatch(logout());
       
         window.localStorage.setItem('userdata',JSON.stringify("null"));

        navigate('/login');
        
    }

    const [user,setUser]=useState({
        username:'',
        password:''
    })
    useEffect(()=>{
        const usernamex=window.localStorage.getItem('userdata');
        if(usernamex!=null)
        setUser(JSON.parse(usernamex))
    },[]);
    return(
        <div className="navbar">
             
           
            <div className="top">
                <div className="prof">
                <div className="name">{user.username} </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16" id="IconChangeColor"> 
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" id="mainIconPathAttribute" filter="url(#shadow)"></path> 
                <filter id="shadow">
                <feDropShadow id="shadowValue" stdDeviation="0" dx="0" dy="0" flood-color="black"></feDropShadow></filter></svg></div> 
              
              
                </div>
                <hr></hr>
                <br></br>
                <br></br><br></br><br></br><br></br>
               <div className="prof">
                <div className="name">Dashboard</div> 
                <div><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout-dashboard" width="30" height="30" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" id="IconChangeColor">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" id="mainIconPathAttribute"></path>
                      <path d="M4 4h6v8h-6z" id="mainIconPathAttribute"></path> <path d="M4 16h6v4h-6z" id="mainIconPathAttribute"></path> 
                      <path d="M14 12h6v8h-6z" id="mainIconPathAttribute"></path>
                 <path d="M14 4h6v4h-6z" id="mainIconPathAttribute"></path> </svg></div>
               </div>
               <br></br>
               <div className="prof">
               <div className="name">Orders </div>
                <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-receipt-cutoff" viewBox="0 0 16 16" id="IconChangeColor"> 
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" id="mainIconPathAttribute"></path> <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" id="mainIconPathAttribute"></path> 
                </svg></div> 
                </div>
                <br></br>
                <div className="prof">

                  <div className="name">Settings</div>
                   <div><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings" id="IconChangeColor"><circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" id="mainIconPathAttribute"></path></svg>
                </div></div> 
                <br></br><br></br><br></br><br></br><br></br>
                <hr></hr>
                <div className="prof">
                    <div className="name">
                 <div className="logoutbutton" onClick={SubmitLogout}>Logout</div> </div>
                 <div>
                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out" id="IconChangeColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" id="mainIconPathAttribute"></path><polyline points="16 17 21 12 16 7"></polyline>
                 <line x1="21" y1="12" x2="9" y2="12"></line></svg></div>
                </div>
                
            </div>
           
            
        </div>
    )
}
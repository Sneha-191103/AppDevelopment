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
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const navigate = useNavigate();
   
    const [user,setUser]=useState({
        admin:'',
        password:'',
        email:'',
        contactNumber:''
    });
    const handlechange=(e)=>{
        setUser({
            ...user,[e.target.name]:e.target.value
        });
    }
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [message, setMessage] = useState({
        type: '',
        content: '',
        url: '',
        btn: ''
    });
    const showMessage = (type, content, url = '', btn = 'Got it') => {
        setMessage({ type, content, url, btn });
        setPopupVisible(true);
    };
    const SubmitLogin=(e)=>{
        e.preventDefault();
        const formValues = Object.values(user);
        if (!formValues.some((value) => !value)) {
            showMessage('success', 'Admin Added successfully!','/adminmanagement');
           
          
        } else {
            showMessage('error', 'Please fill in all fields');
        }
       
        
    }
    const handleGotItClick = () => {
        if (message.url) {
            navigate(message.url);
        }
        setPopupVisible(false);
    };

   
    
    return(
        <>
  
        <div className="formbg">
            <div>
          
            <form className="form_main" onSubmit={(e)=>SubmitLogin(e)}>
           <div className="heading">ADD ADMIN</div>
                <div className="inputContainer">
                    <FaUserTie style={{fontSize:'25px'}}/>
                <input type="text" placeholder="Admin Name" name="admin" value={user.admin} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainer">
                <FaUnlock style={{fontSize:'25px'}}/>
                <input type="password"  placeholder="Password" name="password" value={user.password} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainer">
                <FaEnvelope style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Email" name="email" value={user.email} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainer">
                <FaPhoneAlt style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Contact Number" name="contactNumber" value={user.contactNumber} onChange={handlechange} className="inputField"></input>
                </div>
                
                <br></br>
                <div>
                    <button id="button" type="submit" style={{width:'120px'}}>Add Admin</button>
                </div>
               
                
            </form>
            </div>
            <div className="lottie">
      <Lottie 
	    options={defaultOptions}
        height={500}
        width={490}
        />
    </div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
        </div>
        </>
    )
}
import React, { useState } from 'react';
import '../css/deliverypartner.css'
import '../css/management.css'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt, FaSearchLocation, FaUnlock, FaUserAlt, FaUserTie } from 'react-icons/fa';
import Popup from '../popup/popup';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../lottie/driver.json';
import { GrLocation } from 'react-icons/gr';
import {MdFoodBank} from 'react-icons/md';
import {LuContact} from 'react-icons/lu';
import {SiMaildotru} from 'react-icons/si';
export default function MerchantManagement() {
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponentA = () => {
    setShowComponentA(true);
  };

  const toggleComponentB = () => {
    setShowComponentA(false);
  };

  
  return (
    <div style={{padding:'20px 20px 20px 20px'}}>
      <h3>MERCHANT MANAGEMENT</h3>
    
      <div class="container">
	<div class="tabs">
		
		<input type="radio" id="radio-2" name="tabs" checked="" onClick={toggleComponentA}></input>
		<label class="tab" for="radio-2">Merchant Details</label>
		<input type="radio" id="radio-3" name="tabs" onClick={toggleComponentB}></input>
		<label class="tab" for="radio-3">Add Merchant</label>
		<span class="glider"></span>
	</div>
    
</div>
    

      {showComponentA ? (
        <ComponentA />
      ) : (
        <ComponentB />
      )}
    </div>
  );
}

function ComponentA() {
    const merchantData=[
       {
        name:'adsdgvhv',
        hotelName:'whvckhqvchqvce',
        rating:'4',
        location:'townhall',
        contactNumber:'2345672345',
        email:'hwbbkhb@gmail.com'
       }
      ]
  return (
  <div>
     <div className="headings">MERCHANT DETAILS</div>
    <div>
    <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Merchant Name</th>
            <th>Contact Number</th>
            <th>Merchant Email</th>
            <th>Hotel Name</th>
            <th>Hotel Location</th>
            <th>Hotel Ratings</th>
          </tr>
        </thead>
        <tbody>
          {merchantData.map((merchant, index) => (
            <tr key={index}>
                <td><FaUserAlt/></td>
              <td>{merchant.name}</td>
              <td>{merchant.contactNumber}</td>
              <td>{merchant.email}</td>
              <td>{merchant.hotelName}</td>
              <td>{merchant.location}</td>
              <td>{merchant.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

function ComponentB() {
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
        name:'',
        hotelName:'',
        rating:'',
        location:'',
        contactNumber:'',
        email:''
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
            showMessage('success', 'Driver Added successfully!','/drivermanagement');
           
          
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
          
            <form className="form_mains" onSubmit={(e)=>SubmitLogin(e)}>
           <div className="headings">ADD MERCHANT</div>
                <div className="inputContainerd">
                    <FaUserTie style={{fontSize:'25px'}}/>
                <input type="text" placeholder="Merchant Name" name="name" value={user.name} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainerd">
                <LuContact style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Merchant Contact Number" name="contactNumber" value={user.contactNumber} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainerd">
                <SiMaildotru style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Merchant Email" name="email" value={user.email} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainerd">
                <MdFoodBank style={{fontSize:'35px'}}/>
                <input type="text"  placeholder="Hotel Name" name="hotelName" value={user.hotelName} onChange={handlechange} className="inputField"></input>
                </div>
                <div className="inputContainerd">
                <GrLocation style={{fontSize:'35px'}}/>
                <input type="text"  placeholder="Hotel Location" name="location" value={user.location} onChange={handlechange} className="inputField"></input>
                </div>
                
                
                <br></br>
                <div>
                    <button id="button" type="submit" style={{width:'120px'}}>Add</button>
                </div>
               
                
            </form>
            </div>
            <div className="lottie">
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        />
    </div>
        {isPopupVisible && <Popup message={message} togglePopup={() => setPopupVisible(false)} handleGotItClick={handleGotItClick} />}
        </div>
        </>
    );
}



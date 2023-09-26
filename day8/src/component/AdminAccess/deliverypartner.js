import React, { useState } from 'react';
import '../css/deliverypartner.css'
import '../css/management.css'
import { FaEnvelope, FaPhoneAlt, FaUnlock, FaUserAlt, FaUserTie } from 'react-icons/fa';
import Popup from '../popup/popup';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../lottie/admin1.json';
import {LuContact} from 'react-icons/lu';
import {SiMaildotru} from 'react-icons/si';
import { MdContacts, MdDateRange } from 'react-icons/md';
export default function DeliveryPartner() {
  const [showComponentA, setShowComponentA] = useState(true);

  const toggleComponentA = () => {
    setShowComponentA(true);
  };

  const toggleComponentB = () => {
    setShowComponentA(false);
  };

  
  return (
    <div style={{padding:'20px 20px 20px 20px'}}>
      <h3>DELIVERY PARTNER MANAGEMENT</h3>
     
      <div class="container">
	<div class="tabs">
		
		<input type="radio" id="radio-2" name="tabs" checked="" onClick={toggleComponentA}></input>
		<label class="tab" for="radio-2">DeliveryPartners Details</label>
		<input type="radio" id="radio-3" name="tabs" onClick={toggleComponentB}></input>
		<label class="tab" for="radio-3">Add DeliveryPartners</label>
		<span class="glider"></span>
	</div>
    <br></br>
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
    const driverData=[
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        },
        {
            name:'aadhkljefhse',
            contactNumber:'98765432',
            driverEmail:'rtfygwhknf@gmail.com',
            driverJoiningDate:'02-12-2015',
            driverRating:'5',
            totalDelivery:'32489'
        }
      ]
  return (
  <div>
     <div className="headings">DELIVERY PARTNER DETAILS</div>
    <div>
    <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Driver Email</th>
            <th>Driver Joining Date</th>
            <th>Driver Rating</th>
            <th>Total Delivery</th>
          </tr>
        </thead>
        <tbody>
          {driverData.map((driver, index) => (
            <tr key={index}>
                <td><FaUserAlt/></td>
              <td>{driver.name}</td>
              <td>{driver.contactNumber}</td>
              <td>{driver.driverEmail}</td>
              <td>{driver.driverJoiningDate}</td>
              <td>{driver.driverRating}</td>
              <td>{driver.totalDelivery}</td>
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
      driverEmail:'',
      driverJoiningDate:'',
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
           <div className="headings">ADD DELIVERY PARTNER</div>
                <div className="inputContainerd">
                    <FaUserTie style={{fontSize:'25px'}}/>
                <input type="text" placeholder="Driver Name" name="name" value={user.name} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainerd">
                <LuContact style={{fontSize:'25px'}}/>
                <input type="number"  placeholder="Driver Contact Number" name="contactNumber" value={user.contactNumber} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainerd">
                <SiMaildotru style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Driver Email" name="email" value={user.driverEmail} onChange={handlechange} className="inputField"></input>
                </div>

                <div className="inputContainerd">
                <MdDateRange style={{fontSize:'25px'}}/>
                <input type="text"  placeholder="Joining Date" name="driverJoiningDate" value={user.driverJoiningDate} onChange={handlechange} className="inputField"></input>
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



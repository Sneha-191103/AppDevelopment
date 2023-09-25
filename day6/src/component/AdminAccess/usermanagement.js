import React, { useState } from 'react';
import '../css/deliverypartner.css'
import '../css/management.css'
import { FaEnvelope, FaPhoneAlt, FaUnlock, FaUserAlt, FaUserTie } from 'react-icons/fa';
import Popup from '../popup/popup';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';
import animationData from '../lottie/driver.json';
export default function UserManagement() {
    const userData=[
        {
            name:'shdvkhavf',
            contactNumber:'123456789',
            email:'fwqefikfeeg@gmail.com',
            location:'townhall',
            totalOrders:'10'
        }
      ]
  return (
  <div style={{padding:'20px 20px 20px 20px'}}>
    <h3>USER DETAILS</h3>
    <div>
    <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>User Email</th>
            <th>User Location</th>
            
            <th>Total Orders</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
                <td><FaUserAlt/></td>
              <td>{user.name}</td>
              <td>{user.contactNumber}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
             
              <td>{user.totalOrders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}


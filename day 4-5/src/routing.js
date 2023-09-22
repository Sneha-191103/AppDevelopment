import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./component/pages/login";
import Home from "./component/pages/home";
import Register from "./component/pages/register";
import Sidebar from "./component/AdminAccess/Sidebar";
import Dashboard from "./component/AdminAccess/dashboard";
import UserManagement from "./component/AdminAccess/usermanagement";
import MerchantManagement from "./component/AdminAccess/merchantmanagement";
import Cuisine from "./component/AdminAccess/cuisine";
import Transactions from "./component/AdminAccess/transactions";
import Comments from "./component/AdminAccess/comments";
import Commissions from "./component/AdminAccess/commissions";
import DeliveryStatus from "./component/AdminAccess/deliverystatus";
import DeliveryPartner from "./component/AdminAccess/deliverypartner";
import { useUser } from "./component/Context/usercontext";
import AdminManagement from "./component/AdminAccess/adminManagement";
import Dash from "./component/AdminAccess/dash";

const PrivateRoute = ({ children }) => {
  const { isUserLoggedIn } = useUser();
  return isUserLoggedIn ? children : <Navigate to="/" replace />;
};

export default function Routing() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
     </Routes>
        <Sidebar>
       <Routes>
            <Route path="/dash" element={<PrivateRoute><Dash /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/adminmanagement" element={<PrivateRoute><AdminManagement /></PrivateRoute>} />
            <Route path="/merchantmanagement" element={<PrivateRoute><MerchantManagement /></PrivateRoute>} />
            <Route path="/usermanagement" element={<PrivateRoute><UserManagement /></PrivateRoute>} />
            <Route path="/cuisine" element={<PrivateRoute><Cuisine /></PrivateRoute>} />
            <Route path="/transactions" element={<PrivateRoute><Transactions /></PrivateRoute>} />
            <Route path="/comments" element={<PrivateRoute><Comments /></PrivateRoute>} />
            <Route path="/Commissions" element={<PrivateRoute><Commissions /></PrivateRoute>} />
            <Route path="/deliverystatus" element={<PrivateRoute><DeliveryStatus /></PrivateRoute>} />
            <Route path="/deliverypartner" element={<PrivateRoute><DeliveryPartner /></PrivateRoute>} />
          </Routes>
        </Sidebar>
     
    </>
  );
}

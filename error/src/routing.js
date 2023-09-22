import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./component/pages/login";
import Home from "./component/pages/home";
import Register from "./component/pages/register";
import SideRoute from "./sideroute";
import Sidebar from "./component/AdminAccess/Sidebar";


export default function Routing(){
    return( 
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route exact path="/" element={<Home/>}/> 
        </Routes>
    )
}
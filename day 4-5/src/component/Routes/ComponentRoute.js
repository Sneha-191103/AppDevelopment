import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from '../AdminAccess/dashboard'
import AdminManagement from '../AdminAccess/adminManagement';
import MerchantManagement from '../AdminAccess/merchantmanagement';
import UserManagement from '../AdminAccess/usermanagement';
import Cuisine from '../AdminAccess/cuisine';
import Transactions from '../AdminAccess/transactions';
import Comments from '../AdminAccess/comments';
import Commissions from '../AdminAccess/commissions';
import DeliveryStatus from '../AdminAccess/deliverystatus';
import DeliveryPartner from '../AdminAccess/deliverypartner';
import { useUser } from "../Context/usercontext";

const PrivateRoute = ({ children }) => {
    const { isUserLoggedIn } = useUser();
    return isUserLoggedIn ? children : <Navigate to="/login" replace />;
};


const ComponentRoute = () =>{
    return (
        <Routes>
            <Route path="/dashboard " element={ <PrivateRoute><Dashboard/> </PrivateRoute>}/>
                <Route path="/adminmanagement" element={<PrivateRoute><AdminManagement/> </PrivateRoute>}/>
                <Route path="/merchantmanagement" element={<PrivateRoute><MerchantManagement/></PrivateRoute>}/>
                <Route path="/usermanagement" element={<PrivateRoute><UserManagement/></PrivateRoute>}/>
                <Route path="/cuisine" element={<PrivateRoute><Cuisine /></PrivateRoute>}/>
                <Route path="/transactions" element={<PrivateRoute><Transactions/></PrivateRoute>}/>
                <Route path="/comments" element={<PrivateRoute><Comments/></PrivateRoute>}/>
                <Route path="/Commissions" element={<PrivateRoute><Commissions/></PrivateRoute>}/>
                <Route path="/deliverystatus" element={<PrivateRoute><DeliveryStatus/></PrivateRoute>}/>
                <Route path="/deliverypartner" element={<PrivateRoute><DeliveryPartner/></PrivateRoute>}/>
        </Routes>
    );
}

export default  ComponentRoute;
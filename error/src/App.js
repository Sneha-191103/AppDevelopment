import { Routes, Route, Navigate } from "react-router-dom";
import { UserProvider } from "./component/Context/usercontext";
import Sidebar from "./component/AdminAccess/Sidebar";
import Dashboard from './component/AdminAccess/dashboard';
import AdminManagement from './component/AdminAccess/adminManagement';
import MerchantManagement from './component/AdminAccess/merchantmanagement';
import UserManagement from './component/AdminAccess/usermanagement';
import Cuisine from './component/AdminAccess/cuisine';
import Transactions from './component/AdminAccess/transactions';
import Comments from './component/AdminAccess/comments';
import Commissions from './component/AdminAccess/commissions';
import DeliveryStatus from './component/AdminAccess/deliverystatus';
import DeliveryPartner from './component/AdminAccess/deliverypartner';
import { useUser } from "./component/Context/usercontext";
import Login from './component/pages/login';
import Register from './component/pages/register';
import Home from './component/pages/home';

const PrivateRoute = ({ children }) => {
  const { isUserLoggedIn } = useUser();
  return isUserLoggedIn ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Sidebar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route element={
            <div>
              <PrivateRoute><Dashboard /></PrivateRoute>
              <PrivateRoute><AdminManagement /></PrivateRoute>
              <PrivateRoute><MerchantManagement /></PrivateRoute>
              <PrivateRoute><UserManagement /></PrivateRoute>
              <PrivateRoute><Cuisine /></PrivateRoute>
              <PrivateRoute><Transactions /></PrivateRoute>
              <PrivateRoute><Comments /></PrivateRoute>
              <PrivateRoute><Commissions /></PrivateRoute>
              <PrivateRoute><DeliveryStatus /></PrivateRoute>
              <PrivateRoute><DeliveryPartner /></PrivateRoute>
            </div>
          } />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;

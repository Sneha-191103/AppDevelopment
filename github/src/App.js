import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Home from './component/home';
import Register from './component/register';
import { Provider } from 'react-redux';
import store from './component/redux/store';
import Dashboard from './component/pages/dashboard';
import Settings from './component/pages/settings';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        
      <Routes>
        
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/setting" element={<Settings/>}/>
          
         
        </Routes>
        </Provider>
      
    </div>
  );
}

export default App;

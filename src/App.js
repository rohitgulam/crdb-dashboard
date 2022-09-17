import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddCustomer from './views/AddCustomer';
import Home from './views/Home';
import Customers from './views/Customers';
import Login from './views/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import AuthContext from './AuthContext';
import { useContext } from 'react';


function App() {

  const {isAuth} = useContext(AuthContext);

  // changeAuth();
  // console.log("coming from App", isAuth);

  return (
    <div className="bg-slate-200 min-h-[100vh]">
          <Routes>
            `<Route element={ <ProtectedRoutes isAuth={isAuth} /> } >
              <Route path="/" element={ <Home /> } exact />
              <Route path="/add-customer" element={ <AddCustomer /> } />
              <Route path="/customers" element={ <Customers /> } />
            </Route>
            
            <Route path="/login" element={ <Login /> } />
          </Routes>`
    </div>
  );
}

export default App;

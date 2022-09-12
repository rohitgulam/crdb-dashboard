import { Routes, Route } from 'react-router-dom';
import './App.css';
import AddCustomer from './views/AddCustomer';
import Home from './views/Home';
import Customers from './views/Customers';
import Login from './views/Login';
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <div className="bg-slate-200">
      <Routes>
        
        <Route element={ <ProtectedRoutes/> } >
          <Route path="/" element={ <Home /> } exact />
          <Route path="/add-customer" element={ <AddCustomer /> } />
          <Route path="/customers" element={ <Customers /> } />
        </Route>
        
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;

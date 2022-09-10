import './App.css';
import Sidebar from './components/Sidebar';
import AddCustomer from './views/AddCustomer';
import Home from './views/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex bg-slate-200">
      <Sidebar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/add-customer" element={ <AddCustomer /> } />
      </Routes>
    </div>
  );
}

export default App;

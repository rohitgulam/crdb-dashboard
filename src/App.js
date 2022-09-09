import './App.css';
import Sidebar from './components/Sidebar';
import AddCustomer from './views/AddCustomer';

function App() {
  return (
    <div className="flex bg-slate-200">
      <Sidebar />
      <AddCustomer />
    </div>
  );
}

export default App;

import './App.css';
import Sidebar from './components/Sidebar';
import AddCustomer from './views/AddCustomer';

function App() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <AddCustomer />
      <input type="email" name="" id="" />
    </div>
  );
}

export default App;

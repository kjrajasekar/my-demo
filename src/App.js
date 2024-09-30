import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useContext, createContext,useState,useMemo } from 'react'
import UserContext from "./MyContext"
import Service from './Service';
import Name from './Name';
import Myhome from './Myhome';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';



function App() {

  // let names="raja"
  // const [userName, setUserName] = useState('raja');
  // const value = useMemo(
  //   () => ({ userName, setUserName }), 
  //   [userName]
  // );
  return (
    <div>
    <UserContext.Provider value={value}>
      <Myhome />
      <Service />
<Name namekey={names} />
    </UserContext.Provider>

<BrowserRouter>
<Link to="/">Home</Link>
<Link to="/service">Service</Link>
<Link to="/con">Contact</Link>

<Routes>
  <Route path="/" element={<Myhome />} />
  <Route path="/service" element={<Service />} />
  <Route path="*" element={<Name />} />
</Routes>
</BrowserRouter>

</div>
   
  );
}

export default App;

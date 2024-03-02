import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Sign from './Pages/Sign';
import { useState } from 'react';
import Header from './Pages/Header';
import Menu from './Pages/Menu';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [LoggedInUser, setLoggedInUser] = useState(null);

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} ></Route>
          <Route path="/menu" element={<Menu/>} ></Route>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} ></Route>
          <Route path="/signup" element={<Sign setIsLoggedIn={setIsLoggedIn}/>} ></Route>
          <Route path='*' element={<h1 className='container text-white '>404 Page Error...</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

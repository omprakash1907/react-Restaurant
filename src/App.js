import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Header from './Pages/Header';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard';


function App() {

  return (
    <>

      <BrowserRouter >
        <Header />
        <Dashboard/>
        {/* <Layout />
        <Routes  >
          <Route path="/" element={<Dashboard />} ></Route> */}
          {/* <Route path="/product" element={<Product />} ></Route>
                    <Route path="/settings" element={<Settings />} ></Route>
                    <Route path="/cart" element={<Cart  />} ></Route> */}
          {/* <Route path='*' element={<h1 className='container text-white '>404 Page Error...</h1>} />
        </Routes> */}
      </BrowserRouter>
    </>
  )
}

export default App;

import React from 'react'
import logo from '../Assets/Images/logo.avif'
import delivery from '../Assets/Images/delivery.png'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

const Header = ({ isLoggedIn, setIsLoggedIn }) => {

  const handleLogout = () => {
    signOut(auth)
    .then((res)=>{
      setIsLoggedIn(false)
    })
    .catch((err)=>{
      console.log('error')
    })
  }

  return (
    <header>
      <div className=' container  py-3 '>
        <div className="d-flex justify-content-between align-items-center ">
          <div className="logo col-2">
            <a href="">
              <img src={logo} alt="logo" className='img-fluid' width={180} height={220} />
            </a>
          </div>
          <div className="menu  ">
            <ul className='d-flex justify-content-between align-items-center fw-bold fs-5 m-0 p-0'>
              <li className='ms-4 '><Link to="/">HOME</Link></li>
              <li className='ms-4 '><Link to="/menu">MENU</Link></li>
              <li className='ms-4 '><Link to="">ABOUT</Link></li>
              <li className='ms-4 '><Link to="">GALLERY</Link></li>
              <li className='ms-4 '><Link to="">CONTACT</Link></li>
            </ul>
          </div>
          <div className="menu-right d-flex justify-content-between align-items-center col-4">
            <button type="button" class="btn btn-danger  position-relative rounded-circle ">
              <i class="fa-solid fa-utensils text-white "></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark  text-white ">
                9+
              </span>
            </button>
            <div className="delivery">
              <img src={delivery} alt="" className='img-fluid' width={55} />
            </div>
            <div className="order-content fw-bold ">
              <span className=' d-block text-theme fs-6'>Delivery order</span>
              <span className=' d-block text-danger fs-5'>+91-9913138325</span>
            </div>
            {
              isLoggedIn ? (
                <Link className='btn btn-danger text-white fw-bold fs-4' onClick={handleLogout}>Sign Out</Link>
              ) : (
                <Link to="/login" className='btn btn-danger text-white fw-bold fs-4'>Sign In</Link>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

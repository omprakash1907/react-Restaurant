import React from 'react'
import burger from '../Assets/Images/burger.png'
import tomato from '../Assets/Images/tomatos.png'
import onion from '../Assets/Images/onions.png'
import offer1 from '../Assets/Images/offer1.jpg'
import offer2 from '../Assets/Images/offer2.jpg'
import offer3 from '../Assets/Images/offer3.jpg'
import offer4 from '../Assets/Images/offer4.jpg'
import Header from './Header'

const Dashboard = ({isLoggedIn,setIsLoggedIn, name}) => {
  return (
    <>
      <section className=' home bg-theme  position-relative pb-5'>
        <div className="bg-overlap position-absolute w-100 h-100  start-0  top-0 "></div>
        <div className=' container-fluid px-5  '>
          <div className="banner-img position-relative d-flex justify-content-center">
            <img src={burger} alt="" className='img-fluid' style={{ width: '500px', marginTop: '8rem' }} />
            <h2 className=' position-absolute fw-bold text-center banner-heading '>
              <span className='d-block text-white '>TASTE THE</span>
              <span className='d-block text-white '>DIFFERENCE</span>
            </h2>
            <img src={tomato} alt="" className='img-fluid position-absolute start-0 bottom-0 ' style={{ width: '250px' }} />
            <img src={onion} alt="" className='img-fluid position-absolute end-0 top-0 ' style={{ width: '250px' }} />
          </div>
            <h5 className=' text-start position-relative text-white mt-3  ' style={{zIndex:'22'}}>
             {
              name ? (
                <span className='text-white'>Hi, {name}</span>
              ) : (
                <span></span> 
              )
             } 
            </h5>

        </div>
      </section>
      <section className='offers'>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center  align-items-center ">
            <div className="col-4">
              <div className="d-flex justify-content-between align-items-center  align-items-center ">
                <img src={offer1} alt="" className='w-100 py-4' />
              </div>
            </div>
            <div className="col-8">
              <div className="d-flex justify-content-between align-items-center ">
                <div className="col-6">
                  <img src={offer2} alt="" className='w-100 ps-4 ' />
                </div>
                <div className="col-6 ">
                  <img src={offer3} alt="" className='w-100  ps-4' />
                </div>
              </div>
              <div className="col-12">
                <img src={offer4} alt="" className='w-100 ps-4 py-4' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard

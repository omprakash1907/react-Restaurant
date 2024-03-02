import React from 'react'
import Header from './Header'
import leaf from '../Assets/Images/leaf.png'


const Menu = () => {
    return (
        <>
            <Header />
            <section className='menu position-relative  '>
                <div className="bradcamp bg-theme py-5 ">
                    <div className="position-relative z-3 container  text-center  " style={{ zIndex: '2' }}>
                        <h1 className='text-white fw-bold '>MENU ITEMS</h1>
                        <span className='text-white fw-semibold '>Home / Food shop</span>
                    </div>
                    <img src={leaf} alt="" className=' position-absolute ms-5  ' style={{ zIndex: '2' }} />
                </div>
                <div className="bg-overlap position-absolute w-100 h-100   start-0  top-0 "></div>
            </section>
            <div className="container py-5">
                <div className="menu-list  ">
                    <div className="row ">
                        <div className="col-3">
                            <div className="card  " >
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png" className="card-img-top p-3 " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">BBQ Pizza TinTin</h5>
                                    <p className="card-text">Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <a href="#" className="btn btn-danger text-white fw-bold ">Add to Cart</a>
                                        <div className="d-flex justify-content-between  align-items-center">
                                            <i class="fa-solid fa-motorcycle text-danger me-2"></i>
                                            <span>25 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card  " >
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png" className="card-img-top p-3 " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">BBQ Pizza TinTin</h5>
                                    <p className="card-text">Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <a href="#" className="btn btn-danger text-white fw-bold ">Add to Cart</a>
                                        <div className="d-flex justify-content-between  align-items-center">
                                            <i class="fa-solid fa-motorcycle text-danger me-2"></i>
                                            <span>25 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card  " >
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png" className="card-img-top p-3 " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">BBQ Pizza TinTin</h5>
                                    <p className="card-text">Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <a href="#" className="btn btn-danger text-white fw-bold ">Add to Cart</a>
                                        <div className="d-flex justify-content-between  align-items-center">
                                            <i class="fa-solid fa-motorcycle text-danger me-2"></i>
                                            <span>25 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card  " >
                                <img src="https://grandrestaurantv6.b-cdn.net/grandrestaurantv6/demo9/wp-content/uploads/sites/9/2021/01/fish-burger.png" className="card-img-top p-3 " alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">BBQ Pizza TinTin</h5>
                                    <p className="card-text">Gorgonzola, mozzarella, taleggio Red onions, capers, olives</p>
                                    <div className="d-flex justify-content-between  align-items-center ">
                                        <a href="#" className="btn btn-danger text-white fw-bold ">Add to Cart</a>
                                        <div className="d-flex justify-content-between  align-items-center">
                                            <i class="fa-solid fa-motorcycle text-danger me-2"></i>
                                            <span>25 min</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu


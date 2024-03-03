import React, { useEffect, useState } from 'react'
import Header from './Header'
import leaf from '../Assets/Images/leaf.png'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import { app } from '../firebase'
// import { db } from '../firebase'


const Menu = () => {

    const [food, setFood] = useState([])
    const [sortByPrice, setSortByPrice] = useState(false);

    const db = getFirestore(app)


   



    const fetchList = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'product'))
            console.log(querySnapshot);
            var list = []
            querySnapshot.forEach((doc) => {
                var data = doc.data()
                list.push({ id: doc.id, ...data })
            });
            setFood(list)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }
    fetchList()

    console.log(food)

    const handleSort = () => {
        if (sortByPrice) {
            const sorted = [...food].sort((a, b) => a.price - b.price);
            setFood(sorted);
        } else {
            const sorted = [...food].sort((a, b) => b.price - a.price);
            setFood(sorted);
        }
        setSortByPrice(!sortByPrice);
    }

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
                <div className="text-end mt-3">
                    <button className='btn btn-danger  px-4 py-6 fs-6 text-white fw-bold ' onClick={handleSort}>
                        Sort {sortByPrice ? <i className="ms-2 fa-regular fa-circle-up text-white"></i> : <i className="ms-2 text-white fa-regular fa-circle-down"></i>}
                    </button>
                </div>
                <div className="menu-list  ">
                    <div className="row ">
                        {
                            food && food.map((item, id) => {
                                return (
                                    <div className="col-3 mt-4" key={id}>
                                        <div className="card  " >
                                            <img src={item.img} className="card-img-top p-3 " alt="..." height={280} />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between  align-items-center">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className='card-title text-danger fw-bold'>Rs. {item.price}</p>
                                                </div>
                                                <p className="card-text">{item.desc}</p>
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
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu


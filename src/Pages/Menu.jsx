import React, { useEffect, useState } from 'react'
import Header from './Header'
import leaf from '../Assets/Images/leaf.png'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import { app, auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'



const Menu = ({ food, setFood, isLoggedIn, cart, setCart }) => {

    const [orignalList, setOrignalList] = useState([])
    const [sortByPrice, setSortByPrice] = useState(false);

    const nevigate = useNavigate()

    const db = getFirestore(app)



    useEffect(() => {
        const fetch = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'product'))
                const list = querySnapshot.docs.map((doc) => doc.data());
                setFood(list);
            } catch (err) {
                console.error('Error fetching dishes:', err);
                alert('Error fetching dishes');
            }
        }
        fetch();
    }, [db, setFood])

    const handleSort = () => {
        const sorted = sortByPrice ? [...food].sort((a, b) => a.price - b.price) : [...food].sort((a, b) => b.price - a.price);
        setFood(sorted);
        setSortByPrice(!sortByPrice);
    }

    const HandleAdd = async (item) => {
        if (isLoggedIn) {
            const user = auth.currentUser;
            const userEmail = user.email;
            let userCart = JSON.parse(localStorage.getItem(userEmail)) || [];
    
            const existingItemIndex = userCart.findIndex((cartItem) => cartItem.id === item.id);
    
            if (existingItemIndex !== -1) {
                userCart[existingItemIndex].quantity += 1;
            } else {
                userCart.push({ ...item, quantity: 1 });
            }
    
            localStorage.setItem(userEmail, JSON.stringify(userCart));
    
            setCart([...userCart]);
        } else {
            swal("Login First!", "You clicked the button!", "error");
            nevigate('/login');
        }
    };
    






    return (
        <>
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
                                                    <a href="#" className="btn btn-danger text-white fw-bold " onClick={() => HandleAdd(food[id])}>Add to Cart</a>
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


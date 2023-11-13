import React, { useState } from 'react'
import { BsCart } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Cart from '../pages/Cart';
export default function Navbar() {
    const [showCart, setShowCart] = useState(false);
    // const [showEmpty, setShowEmpty] = useState(false);
    const showCartHandler = () => {
        setShowCart(!showCart)
    }
    const getData = useSelector((state) => state.cartReducer.carts);

    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top  bg-body-tertiary" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: 'white', backgroundColor: "black", padding: '1px 3px' }}><b>E-ShopingCart</b></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home
                                    <img style={{ height: '48px' }} src='/Images/mainIcon.jpg' alt='shoping-icon' />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/mens">Men's <img style={{ height: '42px' }} src='/Images/men.jpg' alt='shoping-icon' /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/womens">Women's
                                    <img style={{ height: '42px' }} src='/Images/women.jpg' alt='shoping-icon' /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/jewelerys">Jewellery
                                    <img style={{ height: '42px' }} src='/Images/jwl.jpg' alt='shoping-icon' /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active " to="/electronics">Electronic's
                                    <img style={{ height: '42px', margin: '4px' }} src='/Images/electric.jpg' alt='shoping-icon' />
                                </Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                         
                            <div className="nav-link" onClick={showCartHandler} style={{ cursor: 'pointer' }}>
                                <div style={{ backgroundColor: 'black', color: 'white', width: '70px', borderRadius: '18px', padding: '3px 17px' }}>
                                    <BsCart size={26} />
                                    <span style={{ fontSize: '17px' }}>{(getData.length === 0 ? [] : getData.length)}</span>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </nav>
            <div className='container'>
                {
                    (getData.length && showCart) ? <Cart getData={getData} setShowCart={setShowCart} /> : ''
                }

            </div>

        </div>
    )
}

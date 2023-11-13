import React, { useState, useEffect } from 'react'
import './product.css'
import { Link, useLocation } from 'react-router-dom';
import Spinner from './Spinner';
import { useDispatch } from 'react-redux';
import { ADD } from '../actions/Action';
import { AiOutlineStar } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products(props) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputData, setInputData] = useState('');
    // const [buttonColor,setButtonColor]=useState(true)
    // const [home,setHome]=useState(true)

    const location = useLocation();
    const dispatch = useDispatch();
    const sendData = (element) => {
        dispatch(ADD(element));
        toast.success('add to cart successfully', {
            position: 'top-center'
        })
    }

    const getData = async () => {

        const response = await fetch(
            (location.pathname === '/') ? `https://fakestoreapi.com/products` : `https://fakestoreapi.com/products/category/${props.category}`
        );
        const data = await response.json()
        setProducts(data);
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, []);

    // const add = useContext(data);;

    const handleInput = (e) => {
        setInputData(e.target.value.toLowerCase());
        // console.log(inputData)
    };

    return (
        <div className='my-4'>
            {loading && <Spinner />}
            {/* input fields */}
            {!loading &&
                <div class="container">
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="search your product here..." onChange={handleInput} autoComplete='off' />
                </div>}
            <div className='row mx-4'>
                {
                    products.filter((filterElem) => {
                        if (filterElem === '') {
                            return filterElem
                        } else {
                            return (
                                filterElem.title.toLowerCase().includes(inputData) ||
                                filterElem.description.toLowerCase().includes(inputData)
                            )
                        }
                    }).map((product) => {
                        return (
                            <>
                                <div class=" card col-sm-6 mb-3 mb-sm-0 mx-4 my-4" style={{ width: "17rem" }} key={product.id}>
                                    <Link to={`/product/${product.id}}`} style={{ textDecoration: 'none', color: 'black' }}>
                                        <div className='text-center image-container'>
                                            <img className="zoomable-image" src={product.image} alt="image" style={{ height: '180px', width: '160px', padding: '5px' }} />
                                        </div>
                                    </Link>
                                    <div class="card-body">
                                        <h5 class="card-title">{product.title.slice(0, 18)}...</h5>
                                        <h6 class="card-title">Price:{product.price}$</h6><b>Ratings</b> : <span style={{ backgroundColor: 'green', color: 'white', padding: '0px 3px', borderRadius: '6px', fontSize: '15px' }}>{product.rating.rate}<AiOutlineStar size={18} /></span>

                                        {/* <p class="card-text">  {product.description.slice(0, 40)}...</p> */}
                                        <div className='my-4 text-center'>
                                            <a onClick={() => sendData(product)} href="#" class="btn btn-lg btn-block btn-sm" style={{ backgroundColor: 'black', color: 'white' }}>
                                                ADD TO CART
                                            </a>
                                            {/* <a onClick={() => sendData(product)} href="#" class="btn btn-sm" style={{ backgroundColor: '#fb641b', color: 'white' }}>
                                                BUY NOW
                                            </a> */}
                                        </div>
                                    </div>


                                </div>

                            </>
                        )
                    })
                }

            </div>
            <ToastContainer />

        </div>
    )
}

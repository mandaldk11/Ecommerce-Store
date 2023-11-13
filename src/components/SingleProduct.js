import { useEffect, useState } from "react"
import React from 'react'
import { ADD } from "../actions/Action";
import { useDispatch } from 'react-redux';
// import Magnifier from "react-magnifier";
import ReactImageMagnify from 'react-image-magnify';
import { useParams, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
// import { AiOutlineStar } from 'react-icons/ai';
import Spinner from "./Spinner";

export default function SingleProduct() {
    const [product, setProduct] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // console.log(params,'.........');
    const getData = useSelector((state) => state.cartReducer.carts)

    const getProduct = async () => {
        setShowSpinner(true)
        const res = await fetch(`https://fakestoreapi.com/products/${params.id.toString().slice(0, 1)}`);
        const data = await res.json();
        setProduct(data)
        setShowSpinner(false)
        // console.log(data)
    }
    const sendData = (element) => {
        dispatch(ADD(element))
    }

    useEffect(() => {

        getProduct()

    }, [params.id])
    return (
        <div  >
            {
                showSpinner && <Spinner />
            }
            <div className='container margin-auto' >

                <div className=' mx-4 d-flex justify-content-center align-items-center' style={{ marginTop: '100px' }}>

                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: product.image,
                            height:220,
                            width:200

                        },
                        largeImage: {
                            src: product.image,
                            width: 1200,
                            height:1800,
                            
                        }
                    }} />
                    {/* <img src={product.image} alt='product' height='210px' /> */}
                    <div className='mx-4  my-4'>
                        {/* <h3 className='text-center' style={{color:'white',backgroundColor:'black',padding:'5px'}}> product details...</h3> */}
                        <h4 my-4>{product.title}</h4>
                        <h5>{product.price}$</h5>
                        <p>{product.description}</p>
                        <button onClick={() => sendData(product)} className='btn btn-sm' style={{ color: 'white', backgroundColor: 'black' }}>Add to cart</button>
                    </div>
                </div>
            </div>
            <button className='btn btn-dark mx-4' onClick={() => { navigate('/') }}><b>go-back</b></button>
        </div>
    )
}

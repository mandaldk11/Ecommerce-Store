import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { REMOVE } from '../actions/Action';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export default function Cart(props) {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletItem = (id) => {
    dispatch(REMOVE(id));
    toast('item removed from cart !',{
      position:'top-center'
    })
  }

  const backtoShop = () => {
    navigate(-1);
    props.setShowCart(false)
  }

  const total = () => {
    let price = 0;
    props.getData.map((element) => {
      return price += element.price
    })
    setPrice(price)
  }
  useEffect(() => {
    total()
  }, [total])

  return (
    <div className='container my-4 ' style={{ border: "2px solid grey", }}>

      <h4 style={{ color: "black", backgroundColor: 'yellow' }} className='text-center'>Your Cart Items: </h4>
      {
        props.getData.map((item) => {
          return (
            <>
              <div className=' d-flex justify-content-center my-4 container mx-2' style={{ padding: '10px' }}>
                <Link to={`/product/${item.id}}`}>
                  <img width='70px' src={item.image} className='mx-1' alt='product images'></img>
                </Link>

                <h5 className='mx-2'>  {item.title.slice(0, 32)}... </h5>
                {/* <h6 className='mx-2'>Qtn: <button className='mx-1' style={{ backgroundColor: 'black', color: 'white', borderRadius: '30%' }} onClick={removeQtn}>-</button >{quantity}<button onClick={addQtn} className='mx-1' style={{ backgroundColor: 'black', color: 'white', borderRadius: '30%' }}>+</button></h6> */}
                <h6 className='mx-4'>price : {Math.floor(item.price)}$ </h6>
                <button className='btn btn-warning btn-sm' style={{ height: '30px' }} onClick={() => deletItem(item.id)}>Remove</button>

              </div>
            </>
          )
        })
      }

      <hr style={{ height: '3px', border: 'none', color: 'black', backgroundColor: 'black' }}></hr>
      <button className='btn btn-primary btn-sm' onClick={backtoShop}>Continue-Shoping</button>
      <div className='d-flex  justify-content-end '>
        <h6 className='mx-4'>Grand-Total : {price} $ </h6>
      </div>
      <div className='d-flex  justify-content-end '>
        <button className=' btn btn-success btn-sm mx-4 my-2'>order-now</button>
      </div>
      <ToastContainer/>
    </div>
  )
}

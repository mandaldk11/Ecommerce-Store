import React from 'react'
import Products from '../components/Products'
import Slider from './Slider';
// import { useLocation } from 'react-router-dom';
export default function Home(props) {
  // const location=useLocation();
  return (
    <div  className=" my-4">
       <Slider/>
        <Products category={props.category}/>
    </div>
  )
}

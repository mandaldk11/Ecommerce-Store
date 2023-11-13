import React from 'react'
import './Slider.css'
export default function Slider() {
    return (
        <div className='mx-4 px-4 my-4 py-4'>
            <div id="carouselExampleAutoplaying " className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active"  data-bs-interval="2000">
                        <img src="Images/image-1.jpg" className="d-block w-100 sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item"  data-bs-interval="2000">
                        <img src="Images/image2.jpg" className="d-block w-100 sliderImg" alt="..." />
                    </div>
                    <div className="carousel-item"  data-bs-interval="2000">
                        <img src="Images/image3.jpg" className="d-block w-100 sliderImg" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

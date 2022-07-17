import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'react-bootstrap/Carousel'


function CarouselComponent({banners}) {
    return (
        <div>     
        <Carousel 
            className="container mt-5 box-shadow" 
            nextIcon = {<span aria-hidden="true" className="carousel-control-next-icon" >Next</span>}
            prevIcon = {<span aria-hidden="true" className="carousel-control-next-icon" >Prev</span>}>
           { 
                banners.map (banner =>
                <Carousel.Item interval={1000} key = {banner.id}>
                        <img
                        className="d-block w-100"
                        src={banner.bannerImageUrl}
                        alt={banner.bannerImageAlt}
                        />
                </Carousel.Item>
                )
            }
            </Carousel>
           
        </div>
    );
}

export default CarouselComponent;
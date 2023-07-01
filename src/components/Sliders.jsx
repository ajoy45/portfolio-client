import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from '../assets/1.png'
import slider2 from '../assets/2.png'
import slider3 from '../assets/3.png'
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the autoplay interval as needed
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={slider1} alt="" />
            </div>
            <div>
            <img src={slider2} alt="" />
            </div>
            <div>
            <img src={slider3} alt="" />
            </div>
        </Slider>
    );
};

export default Sliders;
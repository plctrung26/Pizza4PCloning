import './CustomCarousel.scss'
import React from 'react';
import { Carousel } from 'antd';

const images = [
    'slider_image_1.webp',
    'slider_image_2.webp',
    'slider_image_3.webp',
    'slider_image_4.webp',
    'slider_image_5.webp',
    'slider_image_6.webp',

];


const CustomCarousel: React.FC = () => {
    return (
        <div className="carousel-container">
            <Carousel
                dots={true}
                infinite
                autoplay
                slidesToShow={1}
                slidesToScroll={1}
                centerMode={false}
                className='carousel-space'
            >
                {images.map((src, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={src} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>


    )
}

export default CustomCarousel